import fs from 'fs';
import http from "http";
import http2 from "http2";
import Koa from "koa";

// tslint:disable-next-line: ordered-imports
import "module-alias/register";
// tslint:disable-next-line: ordered-imports
import useMiddlewares from "@middleware/index";

import initDb from "@config/db";
import path from 'path';

const app = new Koa();

app.on("error", (error: Error) => {
  // TODO
  // logging error
  console.error(error);
});

initDb(app);

app.keys = ["gochen.cc yeah! @.@ 000"];

useMiddlewares(app);

const port:number = 443;
const host:string = String(process.env.HOST || '127.0.0.1');
 console.log("host ", host);
// app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

http.createServer(app.callback()).listen(80, host, () => {
  console.log(`Koa HTTP/2 running at https://${host}:${80}`)
});

http2.createSecureServer({
  cert: fs.readFileSync(path.join( __dirname,'..','server.crt')),
  key: fs.readFileSync(path.join( __dirname,'..','server.key')),
},app.callback()).listen(port, host, () => {
  console.log(`Koa HTTP/2 running at https://${host}:${port}`)
});
// 这里和new Koa().listen(port, () => console.log('listening'))的区别？
