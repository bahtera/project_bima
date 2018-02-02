const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/resepmasakan");

const Schema = mongoose.Schema;

const resepSchema = new Schema({
    nama : String,
    username : String,
    email : String,
    password : String,
    foto : String
});

const Admin = mongoose.model("admin", resepSchema);

module.exports = Admin;