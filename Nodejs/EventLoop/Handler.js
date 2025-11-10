const {SumrequestHandler} = require('./Sum');
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>Hello from Home Page</h1>
      <a href="/calculator">Go to Calculator</a>
    </body>
  </html>`);
  return res.end();
} else if (req.url === '/calculator') {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
    <head>
      <title> Calculator</title>
    </head>
    <body>
      <h1>Here is Calculator</h1>
      <form action="/calculate-result" method="POST">
        <input type="number" name="num1" placeholder="Enter first number" required>
        <input type="number" name="num2" placeholder="Enter second number" required>
        <input type="submit" value="Sum">
      </form>
    </body>
  </html>`);
  return res.end();
} else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
  
  return SumrequestHandler(req, res);
}
res.setHeader('Content-Type', 'text/html');
  res.write(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>404 Page Not Found</h1>
      <a href="/">Go to Home Page</a>
    </body>
  </html>`);
  return res.end();

}

  exports.requestHandler = requestHandler;