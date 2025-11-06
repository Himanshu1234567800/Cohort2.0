const http = require('http');
 const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First response</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
 });
 const PORT = 3001;
 server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });