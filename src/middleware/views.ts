import Koa from "koa";
import views from "koa-views";
/**
 * 确保View中间件在router中间件之前注册。这样确保在router的定义里可以
 * 使用ctx.render方法
 *
 */

export default (app: Koa) => {
  app.use(
    views(__dirname, {
      extension: "ejs"
    })
  );
};
