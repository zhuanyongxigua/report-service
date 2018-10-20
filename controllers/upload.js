import R from 'ramda';
import fs from 'fs';
import imagesModel from '../models/imgUpload';
import * as db from '../data/db'

export const uploadImage = async (req, res ,next) => {
    try {
        let aImgList = [];
        if (req.files.length !== 0) {
            req.files.forEach(async ele => {
                let imgUpload = new imagesModel();
                imgUpload.img.data = fs.readFileSync(ele.path);
                imgUpload.img.contentType = ele.mimetype;
                imgUpload.isDel = false;
                let oImgUpload = await imgUpload.save();
                aImgList.push(oImgUpload);
                if (aImgList.length === req.files.length) {
                    res.json({
                        success: true,
                        rows: aImgList,
                        result: {}
                    })
                }
            });  
        } else {
            res.json({
                success: true,
                rows: []
            })
            
        }
              
    } catch (err) {
        next(err);
    }
}

export const getImage = async (req, res, next) => {
    try {
        let oImageModel = await db.findOneById(imagesModel)(req.params.id);
        res.contentType(oImageModel.img.contentType);
        res.send(oImageModel.img.data);
    } catch(err) {
        next(err);
    }
}

