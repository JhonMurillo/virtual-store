const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const storeSchema = new Schema({
    name : { type: String, required: true},
    slug: { type: String,  unique: true, slug: 'name'},
    phone : { type: String, required: true},
    email : { type: String, required: true},
    address : { type: String, required: true},
    social_networks : [
        { 
            name: { type: String, required: true},
            link: { type: String, required: true}
        }
    ],
    status: {type: Boolean, default: true}, 
    created_at : { type:Date, default: new Date}
});

const StoreModel = mongoose.model('stores', storeSchema);

module.exports = StoreModel;