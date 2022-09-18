import mongoose from 'mongoose';


const { Schema, model } = mongoose;

// Schema for the collection
const retailerSchema = new Schema({
    retailerName:{
        type : String,
        required: true
    },

    location: {
        type: String,
        required: true
    },
    contact: {
        type: Array,
        required: true
    },

});

// Model for that collection using the schema
const retailers = model('retailers', retailerSchema);

export default retailers;