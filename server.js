const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname;
http.createServer((req,res)=>{let p=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(p.endsWith(path.sep))p+=`index.html`;fs.readFile(p,(e,d)=>{if(e){res.writeHead(404);return res.end('Not found')}const ext=path.extname(p);const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png'};res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream'});res.end(d)})}).listen(8765,'127.0.0.1');
