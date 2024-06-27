const mongoose = require("mongoose");

let connectToMDB = async ()=>{

    try {
        await mongoose.connect("mongodb+srv://roshanjj8:Roshan@123@roshanmern.vdmhnrr.mongodb.net/?retryWrites=true&w=majority&appName=RoshanMERN");
        console.log("connected sucessfully");
    }catch(err){
        console.log("Can't connect to Database");
    }
};



connectToMDB();
