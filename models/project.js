var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
    projectId: String,
    projectName: String,
    isDel: Boolean,
});

var ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;