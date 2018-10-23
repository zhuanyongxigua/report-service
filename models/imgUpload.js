import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let imgSchema = new Schema({
    img: { data: Buffer, contentType: String },
    isDel: Boolean
});

let imagesModel = mongoose.model('Image', imgSchema);

export default imagesModel;
