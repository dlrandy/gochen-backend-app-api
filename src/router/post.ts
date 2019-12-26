import postController from '@controllers/postController'
import KoaRouter from 'koa-router';
const posts = new KoaRouter();
posts
  .post('/', postController.index)
  .get('/create', postController.create)
  .put('/:id', postController.update)
  .get('/:id/edit', postController.edit);
export default posts;