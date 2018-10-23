import mongoose from 'mongoose';
let Schema = mongoose.Schema;


let ProjectSchema = new Schema({
    projectId: String,
    projectName: String,
    isDel: Boolean,
});

let ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;