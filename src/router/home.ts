import homeController from '@controllers/homeController'

import KoaRouter from '@koa/router';
const home = new KoaRouter();
const baseUrl = '/'
home
  // .use(authenticated())
  .get(`${baseUrl}/`, homeController.index)
export default home;