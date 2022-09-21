import mongoose from 'mongoose';
import Manufacturers from './Manufacturers.js';

import retailers from './retailers.js';


const { Schema, model } = mongoose;

// Schema for the collection
const invoicesSchema = new Schema({
    manufacturerId:{
        type: Schema.Types.ObjectId,
        ref: Manufacturers
    },

    retailerId: {
        type: Schema.Types.ObjectId,
        ref: retailers
    },
    unitPrice: {
        type: Number,
        required: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    totalValue: {
        type: String,
        required: true
    },
    paidAmount: {
        type: String,
        required: true
    },
    remainderAmount: {
        type: String,
        required: false
    },

    dateOfPurchase: {
        type: String,
        required: true
    },

    allPaid:{
        type: Boolean,
        required: true
    }
});

// Model for that collection using the schema
const Invoices = model('invoices', invoicesSchema);

export default Invoices;