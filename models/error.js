import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ErrorSchema = new Schema({
    _t: String,
    colNum: Array,
    count: String,
    from: Array,
    id: String,
    level: Array,
    msg: Array,
    rowNum: Array,
    target: Array,
    uin: String
}, {
    timestamps: true
});

let ErrorModel = mongoose.model('Error', ErrorSchema);

export default ErrorModel;
