import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ErrorSchema = new Schema({
    loadPage: Number,
    domReady: Number,
    networkTime: Number,
    contentLoad: Number,
    onloadcb: Number,
    projectId: String,
    isDel: Boolean
}, {
    timestamps: true
});

let ErrorModel = mongoose.model('Error', ErrorSchema);

export default ErrorModel;
