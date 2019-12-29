import authController from '@controllers/authController'
import KoaRouter from '@koa/router';
import guest from '@middleware/guest';

const auth = new KoaRouter();
const baseUrl = '/auth';
auth
  .get(`${baseUrl}`/*,guest()*/,authController.index)
  .post(`${baseUrl}/login`, authController.login)
  .post(`${baseUrl}/register`, authController.register)
  .get(`${baseUrl}/logout`, authController.logout);


export default auth;

