import postController from '@controllers/postController';
import KoaRouter from '@koa/router';
import withUser from '@middleware/withUser';
import authRouter from '@router/auth';
import homeRouter from '@router/home';
import postRouter from '@router/post';
import userRouter from '@router/user';
import Koa from 'koa';


export default (app: Koa) => {
    [
        homeRouter,
        authRouter,
        postRouter,
        userRouter,
    ].forEach(
        (router:KoaRouter) => app.use(router.routes()).use(router.allowedMethods())
    );
    
};







