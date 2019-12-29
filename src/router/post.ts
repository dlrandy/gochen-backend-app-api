import postController from '@controllers/postController'
import authenticated from '@middleware/authenticated';

import KoaRouter from '@koa/router';
const posts = new KoaRouter();
const baseUrl = '/posts'
posts
  // .use(authenticated())
  .get(`${baseUrl}/`, postController.index)
  .post(`${baseUrl}/`, postController.store)
  .get(`${baseUrl}/create`, postController.create)
  .put(`${baseUrl}/:id`, postController.update)
  .get(`${baseUrl}/:id/edit`, postController.edit);
export default posts;