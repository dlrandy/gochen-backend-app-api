// tslint:disable-next-line: ordered-imports
import withRouter from '@router/index';
// import methodOverride from '@middleware/methodOverride';
import Koa from 'koa';

// 注册router定义的路由
export default (app:Koa) => {
  withRouter(app);
};