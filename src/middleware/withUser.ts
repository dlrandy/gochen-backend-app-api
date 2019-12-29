import Koa, {  Context, ParameterizedContext } from 'koa';
export default () => {
  return async (ctx: ParameterizedContext, next: Koa.Next) => {
    const {user} = ctx.session;
    if (user) {
      ctx.state = {...ctx.state, user};
    } else {
      await next();
      
    }
  }
};