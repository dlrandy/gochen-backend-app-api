import Koa, {  Context, ParameterizedContext } from 'koa';
export default () => {
  return async (ctx: Context&ParameterizedContext, next: Koa.Next) => {
    const {user} = ctx.session;
    if (user) {
      ctx.redirect('/');
    } else {
      await next();
      
    }
  }
};