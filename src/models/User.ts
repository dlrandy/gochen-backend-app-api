// tslint:disable: object-literal-sort-keys
import { model, Document, Model, Schema } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
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
  fullName: {
    type: String,
    required: true
  },
  lastName: String,
  avatar: String,
  password: {
    type: String,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
schema.plugin(uniqueValidator);
const User: Model<IUserModel> = model<IUserModel>("User", schema);
export default User;
