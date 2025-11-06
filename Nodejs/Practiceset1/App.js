const http = require('http');

const server = http.createServer((req, res) => {
console.log(req.url, req.method);
if(req.url === '/home'){
  res.write('<h1>Welcome to Home Page</h1>');
  return res.end();
}
else if(req.url === '/men'){
  res.write('<h1>Welcome to Men\'s Page</h1>');
  return res.end();
}
else if(req.url === '/women'){
  res.write('<h1>Welcome to Women\'s Page</h1>');
  return res.end();
}
else if(req.url === '/kids'){
  res.write('<h1>Welcome to Kids\' Page</h1>');
  return res.end(); 
}
else if(req.url === '/cart'){
  res.write('<h1>Welcome to Cart Page</h1>');
  return res.end();
}
 res.write(`<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice set</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">men</a></li>  
        <li><a href="/women">women</a></li>
        <li><a href="/kids">kids</a></li> 
        <li><a href="/cart">cart</a></li> 
    </ul>
    </nav>
  </header>
</body>
</html>`);
return res.end();
});
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});