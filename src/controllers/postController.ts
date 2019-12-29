import { RouterContext } from '@koa/router';
import Post, { IPost } from '@models/post'
import postService from '@services/postService';
import Koa from 'koa';

export default  {
  async index(ctx: Koa.Context & RouterContext) {
    const posts = await postService.getAllPosts();
    ctx.state.posts = posts;
    ctx.state.title = 'Home';
    ctx.body='rerer'
    await ctx.render('index');
  },

  async create(ctx: Koa.Context & RouterContext ) {
    ctx.state.title = 'Create Post';
    await ctx.render('post/create');
  },

  async store(ctx: Koa.Context & RouterContext ) {
    const { body } = ctx.request;
    const postData = {
      ...body,
      author: ctx.session.user,
      image: 'https://picsum.photos/300/?random'
    };
    const post = await postService.savePost(postData);
    ctx.redirect(`/post/${post.id}`);
  },

  async show(ctx: Koa.Context & RouterContext ) {
    const { id } = ctx.params;
    try {
      const post = await postService.getPostById(id);
      ctx.state.post = post;
      ctx.state.title = post.title;
    } catch(e) {
      ctx.throw(404, "Post not found");
    }
    await ctx.render('post/show');
  },

  async edit(ctx: Koa.Context & RouterContext ) {
    const { id } = ctx.params;
    try {
      const post = await postService.getPostById(id);
      ctx.state.post = post;
      ctx.state.title = `Edit Post - ${post.title}`;
    } catch(e) {
      ctx.throw(404, "Post not found");
    }
    await ctx.render('post/edit');
  },

  async update(ctx: Koa.Context & RouterContext ) {
    const { id } = ctx.params;
    const { body } = ctx.request;
    try {
      const postData = { ...body, createdAt: new Date() }
      const post = await postService.updatePostById(id, postData);
      ctx.redirect(`/post/${post.id}`);
    } catch(e) {
      ctx.throw(e);
    }
  }
};