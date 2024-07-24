import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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

}, {
    timestamps: true
});



const Role = mongoose.model('Role', roleSchema);

export default Role;