import mongoose from "mongoose";

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    notation: {
        type: String,
    },
    createdBy: {
        type: Number,
        default: 1,
    },
    modifiedBy: {
        type: Number,
        default: 1,
    }
});



const Type = mongoose.model('Type', typeSchema);

export default Type;