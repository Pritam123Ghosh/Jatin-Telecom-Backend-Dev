import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
        },
        address: {
            type: String,
        },
        avatar: {
            type: String,
            default: "https://i.pinimg.com/736x/68/69/7e/68697ed39e4b7df530c3a61c1853b81a.jpg"
        },
        //why active?
        active: {
            type: Number,
            default: 1,
        },
        //why deleted?
        deleted: {
            type: Number,
            default: 0,
        },
        //why createdBy?
        createdBy: {
            type: Number,
            default: 1,
        },
        //why modifiedBy?
        modifiedBy: {
            type: Number,
            default: 1,
        }

    }, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;