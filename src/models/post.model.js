import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        category: {
            type: Number,
        },
        userId: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default:
                'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
        },
        slug: {
            type: String,
            unique: true,
        },
        active: {
            type: Number,
            default: 1,
        },
        deleted: {
            type: Number,
            default: 0,
        },
        createdBy: {
            type: Number,
            default: 1,
        },
        modifiedBy: {
            type: Number,
            default: 1,
        }
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;