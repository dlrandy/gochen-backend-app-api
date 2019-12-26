import User, { IUserModel } from '@models/User';

export default {
    async getAllUsers(): Promise<IUserModel[]> {
        return User.find();
    },

    async saveUser(user: IUserModel): Promise<IUserModel> {
        return new User(user).save();
    },

    async getUserById(id: string): Promise<IUserModel> {

        return User.findById(id).populate('author');

    },
    async getUserByEmail(email: string): Promise<IUserModel> {

      return User.findOne({email});

  },


    async updateUserById(id: string, user: IUserModel): Promise<IUserModel> {

        return User.findByIdAndUpdate(id, user);

    }
};