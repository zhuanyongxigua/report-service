import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PerformanceSchema = new Schema({
    loadPage: Number,   // 页面加载时间
    domReady: Number,   // 解析DOM时间
    networkTime: Number,    // 获取资源时间（主要是关于网络）
    contentLoad: Number,    // 资源加载完成时间(主要是关于gzip和压缩的解压)
    onloadcb: Number,   // onload回调时间
    projectId: String,
    isDel: Boolean
}, {
    timestamps: true
});

let PerformanceModel = mongoose.model('Performance', PerformanceSchema);

export default PerformanceModel;
