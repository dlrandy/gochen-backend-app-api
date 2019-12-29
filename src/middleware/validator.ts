import joi from '@hapi/joi';
import { ParameterizedContext } from 'koa';

// TODO 在特定的路由下定义
const schema  = joi.object({
  name: joi.string().required(),
  address: joi.string(),
  company: joi.string(),
  position: joi.string(),
  phone: joi.number().required(),
});

const ALLOWED_METHODS =  ['PUT', 'POST'];
export default () => {
  return async (ctx: ParameterizedContext, next) => {
    const {method} = ctx;
    const { body } = ctx.request;
    if (ALLOWED_METHODS.includes(method)) {
      const {error} = schema.validate(body);
      if (error) {
        ctx.status = 422;
        ctx.body = {
          errors: error.details.map(e =>e.message),
          message: 'validation error',
          status: 'error',
        };
      }else {
        await next();
      }
    } else {
      await next();
    }
  }
};


