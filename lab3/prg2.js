import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write ("<h2>Akash pandey Paundey</h2>");
  res.write(
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla, non culpa eaqye.nihil hic mangi ma"
  )
  res.end();
});

server.listen(4444, () => console.log("Server is running at 4444..."));