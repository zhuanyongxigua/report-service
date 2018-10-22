import R from 'ramda';
import UserModel from '../models/user';
import ProjectModel from '../models/project';
import * as db from '../data/db';
import uniqid from 'uniqid';

export const addProject = function(req, res, next) {
    try {
        let oProject = new ProjectModel();
        async function getUniqid() {
            let sUniqid = uniqid();
            let oUserModel = await db.find(ProjectModel)({projectId: sUniqid})({});
            if (oUserModel) {
                return getUniqid();
            } else {
                return sUniqid;
            }
        }
        oProject.projectId = getUniqid();
        oProject.projectName = req.body.projectName;
        oProject.isDel = false;
        oProject.save((err, doc) => {
            res.json({
                success: true,
                projectId: oProject.projectId
            })
        })
    } catch(err) {
        next(err);
    }
}

export const getProjectList = async function(req, res, next) {
    try {
        let options = {
            skip: (req.body.currentPage - 1) * req.body.pageSize,
            limit: req.body.pageSize,
            sort: '-createAt'
        }

        let fnGetCount = new Promise((resolve, reject) => {
            ProjectModel.count({}, (err, c)=> err ? reject(err) : resolve(c));
        });

        let aProjectModel = await db.find(ProjectModel)({
            projectName: new RegExp(req.body.param.topicVo.queryStr, "i"),
        })(options);

        let aProjects = [...aProjectModel];
        aProjects.map(ele => ele._doc.id = ele.id);

        res.json({ total: (await fnGetCount), rows: aProjects});
    } catch(err) {
        next(err);
    }
}
