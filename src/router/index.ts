import postControler from '@controllers/postController';
import postRouter from '@router/post';
import userRouter from '@router/user';
import KoaRouter from 'koa-router';
const router = new KoaRouter();
const routers: Array<[string, KoaRouter]> = [
    ['/user',userRouter],
    ['/post', postRouter],
];

routers.forEach(([path, route]) => router.use(path, route.routes()))

router.get('/', postControler.index);
export default router;







