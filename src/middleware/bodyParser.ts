import Koa from 'koa';
import bodyParser from "koa-body";
export default (app: Koa) => app.use(bodyParser());