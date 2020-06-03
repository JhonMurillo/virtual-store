const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema

const productSchema = new Schema({
    name : { type: String, required: true},
    slug: { type: String,  unique: true, slug: 'name'},
    sku : { type: String, required: true},
    title : { type: String, required: true, unique: true},
    description : { type: String, required: true},
    price : { type: Number, required: true},
    price_old : { type: Number},
    quantity_avaiable : { type: Number},
    images: [
        {
            src: { type: String, required: true, unique: true},
            is_principal: { type: Boolean, required: true }
        }
    ],
    store: { type: Schema.ObjectId, ref: 'StoreModel'},
    categories: [{ type: Schema.ObjectId, ref: 'CategoryModel'}],
    rating: { type: Number, default: 0},
    status: {type: Boolean, default: true}, 
    created_at : { type:Date, default: new Date}
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;