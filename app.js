const http = require('http');

const localhost = 3000;

const server = http.createServer((req,res)=>
{
  res.statusCode = 200;

  res.setHeader('Content-Type','text/html');

  res.end("<html> <body> <h1> Hello Everyone </h1> </body> </html>");

  

});
server.listen(localhost);
