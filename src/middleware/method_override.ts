import Koa, { ParameterizedContext } from 'koa';
const methodOverride = async (ctx:ParameterizedContext, next: Koa.Next) => {
  const {method} = ctx.request.body;
  if (method) {
    ctx.method = method;
  }
  await next()

}
export default (app:Koa) => app.use(methodOverride);