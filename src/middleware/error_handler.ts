
import Koa from 'koa';

const errorHandler = async (ctx: Koa.ParameterizedContext, next: Koa.Next) => {
  try {
    await next();
    // if (ctx.status === 404) {
    //   console.log('====================================');
    //   console.log(ctx);
    //   console.log('====================================');
    // }
  } catch (error) {
    // ctx.status = error.status;
    ctx.body = error.message;
    const acceptJson = ctx.get('Accept') === 'application/json';
    if (acceptJson) {
      ctx.body = {
        error: 'An error just occured'
      }
    }
    ctx.app.emit('error', error, ctx);
  }
}

export default (app: Koa) => app.use(errorHandler);



