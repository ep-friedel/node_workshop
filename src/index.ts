import * as express from "express";
import * as http from "http";

import router from "./router/router";

const app = express();

const server = http.createServer(app);

server.listen(
  {
    port: 12345,
    host: "localhost"
  },
  err => {
    if (err) console.log(err);
    console.log("listening");
  }
);

app.use(router);

app.get("*", (req, res) => {
  res.send("hallo");
});
