import R from 'ramda';
import PostModel from '../models/post';
import UserModel from '../models/user';
import RoleTypeModel from '../models/roleType';
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
        console.log(req);
        res.json({
            verify: true
        })
    } catch(err) {
        next(err);
    }
}
