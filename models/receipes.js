import mongoose from "mongoose";
// Receipe Schema rules of datatypes
const receipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients:{String},
    category: {type: String, required: true},
    serving: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()}

})
//Exported model with the database Name
export default mongoose.model("Receipe", receipeSchema)
