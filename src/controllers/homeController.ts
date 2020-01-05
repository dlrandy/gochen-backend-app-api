import { RouterContext } from '@koa/router';
import Koa from 'koa';

export default  {
  async index(ctx: Koa.Context & RouterContext) {
    ctx.state.title = 'Gochen Home';
    await ctx.render('index', {
      pageTitle: '主页',
      siteTitle: 'Gochen'
    });
  },

};