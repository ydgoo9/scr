var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url_module = require('url');

const redis = require('redis');

const redis_client = redis.createClient({
  host : 'redis://127.0.0.1',
  port : 6379,
  db : 0
});
redis_client.connect();

if(process.argv[2])
  redis_client.set('id', process.argv[2]);
else
  redis_client.set('id', 'nil');

console.log('start web app with nodejs');

var id_value = redis_client.get('id', function(err, reply){
  return resolve(reply);
});

var app = http.createServer(function(request,response){
    var url = request.url;
    var redirect_url = './index.html';
    console.log('url : ' + url);
    
    if(request.method == 'GET'){
      console.log('--- request GET ---');

      // config URL, images 만 redirect 허용, 나머지는 모드 index.html 
      if(url == '/resource/coretrust_logo.png'){
        redirect_url = './resource/coretrust_logo.png';
        fs.readFile(redirect_url, function(err, data){
          response.writeHead(200);
          response.end(data);  
        }); 
      }
      else{
        if(url == '/config')
          redirect_url = './config.html';
      
        console.log('redirect to ' + redirect_url);
          
        fs.readFile(redirect_url, 'utf8', function(err, data){
          response.writeHead(200);
          response.end(data);  
        });          
      }  
    }else if(request.method == 'POST'){
      console.log('--- request POST ---');
      request.on('data', function(data){
        if(url == '/level_config'){
          var out = qs.parse(data.toString());
          console.log('out1: ' + out.out1_config);
          
          // string template 
          var outstr =  `
            out1 : ${out.out1_config}    
            out2 : ${out.out2_config}
            out3 : ${out.out3_config}
            out4 : ${out.out4_config}
            out5 : ${out.out5_config}
            out6 : ${out.out6_config}
          `;
          response.writeHead(200);
          response.end(outstr);
        }
        else if(url == '/ch_config'){
          var out = qs.parse(data.toString());
          
          // string template
          var outstr =  `
            Scrambler IP : ${out.scr_ip}
            out1 : ${out.scr_out1_name} , ${out.scr_out1_src} , ${out.scr_out1_dst}    
            out2 : ${out.scr_out2_name} , ${out.scr_out2_src} , ${out.scr_out2_dst} 
            out3 : ${out.scr_out3_name} , ${out.scr_out3_src} , ${out.scr_out3_dst} 
            out4 : ${out.scr_out4_name} , ${out.scr_out4_src} , ${out.scr_out4_dst} 
            out5 : ${out.scr_out5_name} , ${out.scr_out5_src} , ${out.scr_out5_dst} 
            out6 : ${out.scr_out6_name} , ${out.scr_out6_src} , ${out.scr_out6_dst} 
          `;
          response.writeHead(200);
          response.end(outstr);
        }
      });      
    }
});

app.listen(3000);