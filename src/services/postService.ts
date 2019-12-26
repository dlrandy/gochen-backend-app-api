import Post, { IPostModel } from '@models/Post';

export default {
    async getAllPosts(): Promise<IPostModel[]> {
        return Post.find()
            .populate('author');
    },

    async savePost(post: IPostModel): Promise<IPostModel> {
        return new Post(post).save();
    },

    async getPostById(id: string): Promise<IPostModel> {

        return Post.findById(id).populate('author');

    },


    async updatePostById(id: string, post: IPostModel): Promise<IPostModel> {

        return Post.findByIdAndUpdate(id, post);

    }
};