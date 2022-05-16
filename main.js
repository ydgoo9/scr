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
  console.log('get - ' + reply);
  return resolve(reply);
});

var app = http.createServer(function(request,response){
    var url = request.url;
    console.log('url : ' + url);
    
    if(request.method == 'GET'){
      console.log('--- request GET ---');
      console.log(id_value);
      fs.readFile('./index.html', 'utf8', function(err, data){
        response.writeHead(200);
        response.end(data);  
      });          

    }else if(request.method == 'POST'){
      console.log('--- request POST ---');
      request.on('data', function(data){
        var out = qs.parse(data.toString());
        console.log('out1: ' + out.out1_config);
        
        // string template 
        var outstr1 =  `
          out1 : ${out.out1_config}    
          out2 : ${out.out2_config}
          out3 : ${out.out3_config}
          out4 : ${out.out4_config}
          out5 : ${out.out5_config}
          out6 : ${out.out6_config}
        `;
         response.writeHead(200);
         response.end(outstr1);
      });      
    }
});

app.listen(3000);