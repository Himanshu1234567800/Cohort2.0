const SumrequestHandler = (req, res) => {
  console.log("Handling sum request", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log("Sum result:", result);

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
        <h1>Your Result is : ${result}</h1>
    </body>
  </html>`);
  });
};
exports.SumrequestHandler = SumrequestHandler;
