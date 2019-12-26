import http from "http";
import https from "https";
import Koa from "koa";
import bodyParser from 'koa-body';
import session from 'koa-session';
import views from "koa-views";
import path from 'path';
// tslint:disable-next-line: ordered-imports
import 'module-alias/register';
// tslint:disable-next-line: ordered-imports
import router from '@router/index';
// import methodOverride from '@middleware/methodOverride';

import initDb from '@config/db'

initDb();

const app = new Koa();
app.keys = ['gochen.cc yeah! @.@ 000'];


app.use(views(path.join(__dirname, '..','views'), {
  extension: 'ejs'
}));

app.use(bodyParser());
app.use(session(app));

// 注册router定义的路由
app.use(router.routes())
  // 独立的中间件响应有Allow头部的options请求
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
  const currentDateTime = new Date().toLocaleDateString();
  console.log(
    `${ctx.method} request made top oo${ctx.url} at ${currentDateTime}`
  );
  await next();
});

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
// 这里和new Koa().listen(port, () => console.log('listening'))的区别？
