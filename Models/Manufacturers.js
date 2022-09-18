import mongoose from 'mongoose';


const { Schema, model } = mongoose;

// Schema for the collection
const manufacturerSchema = new Schema({
    name:{
        type : String,
        required: true
    },

    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    clients:{
        type: Array,
        required : true
    },
});



// Model for that collection using the schema
const Manufacturers = model('manufacturers', manufacturerSchema);

export default Manufacturers;