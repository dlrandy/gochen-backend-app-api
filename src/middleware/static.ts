import Koa from 'koa';
import serve from "koa-static";
import path from 'path';
export default (app:Koa) => app.use(serve(path.join(__dirname, '../../static')));
