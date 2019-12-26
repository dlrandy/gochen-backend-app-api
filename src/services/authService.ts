import userService from '@services/userService';
import Koa from 'koa';

import User, { IUserModel } from '@models/User';


export default {
  async register(user: IUserModel) {
    return userService.saveUser(user);
  
  },

  async login(email: string) {
    return userService.getUserByEmail(email);
  },


};