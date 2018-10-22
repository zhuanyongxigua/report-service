import R from 'ramda';
import PostModel from '../models/post';
import UserModel from '../models/user';
import RoleTypeModel from '../models/roleType';
import ErrorModel from '../models/error';
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

export const report = function(req, res, next) {
    try {
        let oError = new ErrorModel();
        Object.keys(req.query).forEach(key => oError[key] = req.query[key]);
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
        let oUserModel = await db.find(UserModel)({githubId: req.decoded.githubId})({});
    } catch(err) {

    }
}
