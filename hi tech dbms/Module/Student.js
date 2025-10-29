import mongoose from "mongoose";


const students = new mongoose.Schema({
    id : { type : Number, required : true},
  name: { type: String, required: true },
  cgpa : {type : String , required : true},
});


const studentModule = mongoose.model("students", students);

export default studentModule; 