import authController from '@controllers/authController'
import KoaRouter from '@koa/router';
import authenticated from '@middleware/authenticated';
import guest from '@middleware/guest';

const users = new KoaRouter();
// users
//   .get('/',guest(),authController.index)
//   .post('/login', authController.login)
//   .post('/register', authController.register)
//   .get('/logout', authController.logout);


export default users;

