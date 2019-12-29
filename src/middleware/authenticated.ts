import Koa, { ParameterizedContext } from 'koa';
export default () => {
  return async (ctx: ParameterizedContext, next: Koa.Next) => {
    const {user} = ctx.session;
    if (user) {
      await next();
    } else {
      ctx.redirect('/auth');
    }
  }
};