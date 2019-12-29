import Koa from 'koa';
import session from "koa-session";
export default (app:Koa) => app.use(session(app));
