const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name : { type: String, required: true},
    last_name : { type: String, required: true},
    email : { type: String, required: true, unique: true},
    password : { type: String, required: true},
    phone : { type: String, required: true},
    avatar: { type: String, required: true},
    roles : [{ type: String, required: true}],
    store: { type: Schema.ObjectId, ref: 'StoreModel'},
    status: {type: Boolean, default: true}, 
    created_at : { type:Date, default: new Date}
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;