import authService from '@services/authService';
import userService from '@services/userService';
import {compareEncrytedCode, encryptCode} from '@utils/cryptTools'; 
import Koa from 'koa';
import { RouterContext } from 'koa-router';
import { IUserModel } from '../models/User';

export default {
  async index(ctx: Koa.Context & RouterContext) {
    ctx.state = { title: 'Login or Register' };
    await ctx.render('auth');
  },

  async register(ctx: Koa.Context & RouterContext) {
    const { body } = ctx.request;
    const userData:IUserModel = {
      ...body,
      password: await encryptCode(body.password)
    };
    const user = await authService.register(userData);
    ctx.session.user = user;
    ctx.redirect('/');
  },

  async login(ctx: Koa.Context & RouterContext) {
    const { body } = ctx.request;
    const user = await userService.getUserByEmail(body.email);
    if (!user) { ctx.throw(404, 'user not found'); }
    const isValid = await compareEncrytedCode(body.password, user.password);
    if (isValid) {
      ctx.session.user = user;
      ctx.redirect('/');
    } else {
      ctx.redirect('/auth');
    }
  },

  async logout(ctx: Koa.Context & RouterContext) {
    delete ctx.session.user;
    ctx.redirect('/auth');
  }
};



