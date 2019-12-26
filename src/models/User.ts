// tslint:disable: object-literal-sort-keys
import { model, Document, Model, Schema } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  createdAt: number;
  updatedAt: number;
}

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  avatar: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User: Model<IUserModel> = model<IUserModel>("User", schema);
export default User;
