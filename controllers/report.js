import R from 'ramda';
import ErrorModel from '../models/error';
import ProjectModel from '../models/project';
import * as db from '../data/db'

export const login = function(req, res, next) {
    try {
        res.json({
            verify: true
        });
    } catch(err) {
        next(err);
    }
}

export const report = async function(req, res, next) {
    try {
        let oError = new ErrorModel();
        let oProject = await db.find(ProjectModel)({projectId: req.query.id})({});
        if (!oProject.length) return;
        Object.keys(req.query).forEach(key => oError[key] = req.query[key]);
        oError.projectId = oError.id;
        oError.save((err, doc) => {
            res.json({
                success: true
            })
        })
    } catch(err) {
        next(err);
    }
}

export const getReport = async function(req, res, next) {
    try {
        let options = {
            skip: (req.body.currentPage - 1) * req.body.pageSize,
            limit: req.body.pageSize,
            sort: '-createAt'
        }

        let fnGetCount = new Promise((resolve, reject) => {
            ErrorModel.count({}, (err, c)=> err ? reject(err) : resolve(c));
        });

        let aErrorModel = await db.find(ErrorModel)({
            _id: req.body.param.errorVo.id,
        })(options);

        let aErrors = [...aErrorModel];
        aErrors.map(ele => ele._doc.id = ele.id);

        res.json({ total: (await fnGetCount), rows: aErrors});
    } catch(err) {
        next(err);
    }
}
