import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    typeId: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    notation: {
        type: String,
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
}, {
    timestamps: true
});



const Category = mongoose.model('Category', categorySchema);

export default Category;