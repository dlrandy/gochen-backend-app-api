import http from "http";
import https from "https";
import Koa from "koa";
// tslint:disable-next-line: ordered-imports
import "module-alias/register";
// tslint:disable-next-line: ordered-imports
import useMiddlewares from "@middleware/index";

import initDb from "@config/db";

const app = new Koa();

app.on("error", (error: Error) => {
  // TODO
  // logging error
  console.error(error);
});

initDb(app);

app.keys = ["gochen.cc yeah! @.@ 000"];

useMiddlewares(app);

const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
// 这里和new Koa().listen(port, () => console.log('listening'))的区别？
