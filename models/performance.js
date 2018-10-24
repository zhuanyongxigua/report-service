import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PerformanceSchema = new Schema({
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

let PerformanceModel = mongoose.model('Performance', PerformanceSchema);

export default PerformanceModel;
