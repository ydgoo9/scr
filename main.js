var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url_module = require('url');

const redis = require('redis');
const HTMLContents = require('./html.js')

var scr_ip;
var scr_out1_name, scr_out2_name, scr_out3_name, scr_out4_name, scr_out5_name, scr_out6_name;
var scr_out1_src, scr_out2_src, scr_out3_src,scr_out4_src,scr_out5_src,scr_out6_src;
var scr_out1_dst, scr_out2_dst, scr_out3_dst,scr_out4_dst,scr_out5_dst,scr_out6_dst;

const redis_client = redis.createClient({
  host : 'redis://127.0.0.1',
  port : 6379,
  db : 0
});

redis_client.connect();

console.log('start web app with nodejs');

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
        if(url == '/config'){
             
          redis_client.get('scr_ip').then(function(data){
            scr_ip = data;
          });
          redis_client.get('scr_out1_name').then(function(data){
            scr_out1_name = data;
          });
          redis_client.get('scr_out2_name').then(function(data){
            scr_out2_name = data;
          });
          redis_client.get('scr_out3_name').then(function(data){
            scr_out3_name = data;
          });
          redis_client.get('scr_out4_name').then(function(data){
            scr_out4_name = data;
          });
          redis_client.get('scr_out5_name').then(function(data){
            scr_out5_name = data;
          });
          redis_client.get('scr_out6_name').then(function(data){
            scr_out6_name = data;
          });
          redis_client.get('scr_out1_src').then(function(data){
            scr_out1_src = data;
          });
          redis_client.get('scr_out2_src').then(function(data){
            scr_out2_src = data;
          });
          redis_client.get('scr_out3_src').then(function(data){
            scr_out3_src = data;
          });
          redis_client.get('scr_out4_src').then(function(data){
            scr_out4_src = data;
          });
          redis_client.get('scr_out5_src').then(function(data){
            scr_out5_src = data;
          });
          redis_client.get('scr_out6_src').then(function(data){
            scr_out6_src = data;
          });
          redis_client.get('scr_out1_dst').then(function(data){
            scr_out1_dst = data;
          });
          redis_client.get('scr_out2_dst').then(function(data){
            scr_out2_dst = data;
          });
          redis_client.get('scr_out3_dst').then(function(data){
            scr_out3_dst = data;
          });
          redis_client.get('scr_out4_dst').then(function(data){
            scr_out4_dst = data;
          });
          redis_client.get('scr_out5_dst').then(function(data){
            scr_out5_dst = data;
          });
          redis_client.get('scr_out6_dst').then(function(data){
            scr_out6_dst = data;
          });
          console.log('config - read from redis, ip -', scr_ip);

          const contents = HTMLContents.templateHTML_config(
              scr_ip,
              scr_out1_name,scr_out2_name,scr_out3_name,scr_out4_name,scr_out5_name,scr_out6_name,
              scr_out1_src,scr_out2_src,scr_out3_src,scr_out4_src,scr_out5_src,scr_out6_src,
              scr_out1_dst,scr_out2_dst,scr_out3_dst,scr_out4_dst,scr_out5_dst,scr_out6_dst    
          );
          response.writeHead(200);
          response.end(contents); 
        }
        else{          
          fs.readFile(redirect_url, 'utf8', function(err, data){
            response.writeHead(200);
            response.end(data);  
          });
        }          
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
          
          redis_client.set('scr_ip', out.scr_ip);
          redis_client.set('scr_out1_name', out.scr_out1_name);
          redis_client.set('scr_out2_name', out.scr_out2_name);
          redis_client.set('scr_out3_name', out.scr_out3_name);
          redis_client.set('scr_out4_name', out.scr_out4_name);
          redis_client.set('scr_out5_name', out.scr_out5_name);
          redis_client.set('scr_out6_name', out.scr_out6_name);
          redis_client.set('scr_out1_src', out.scr_out1_src);
          redis_client.set('scr_out2_src', out.scr_out2_src);
          redis_client.set('scr_out3_src', out.scr_out3_src);
          redis_client.set('scr_out4_src', out.scr_out4_src);
          redis_client.set('scr_out5_src', out.scr_out5_src);
          redis_client.set('scr_out6_src', out.scr_out6_src);
          redis_client.set('scr_out1_dst', out.scr_out1_dst);
          redis_client.set('scr_out2_dst', out.scr_out2_dst);
          redis_client.set('scr_out3_dst', out.scr_out3_dst);
          redis_client.set('scr_out4_dst', out.scr_out4_dst);
          redis_client.set('scr_out5_dst', out.scr_out5_dst);
          redis_client.set('scr_out6_dst', out.scr_out6_dst);

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