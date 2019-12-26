// tslint:disable: object-literal-sort-keys
import { model, Document, Model, Schema } from "mongoose";

export interface IPost {
  title: string;
  content: string;
  image: string;
  author: number;
  createdAt: number;
  updatedAt: number;
}

export interface IPostModel extends IPost, Document{
  likes(): string;
}

const schema = new Schema({
 title: {
   type: String,
   required: true
 },
 content: String,
 image: String,
 author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
 },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
});

const Post: Model<IPostModel> = model<IPostModel>('Post', schema);
export default Post;