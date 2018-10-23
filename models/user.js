import mongoose from 'mongoose';
let findOrCreate = require('mongoose-findorcreate');
let Schema = mongoose.Schema;

let bountyUser = new Schema({
    reward: Number,
    githubId: String
})

let UserSchema = new Schema({
    githubId: String,
    OauthId: String,
    OauthToken: String,
    avatar: String,
    username: String,
    reward: Number,
    isDel: Boolean,
    rewardFrom: [bountyUser]
});

UserSchema.plugin(findOrCreate);

let UserModel = mongoose.model('User', UserSchema);

export default UserModel;