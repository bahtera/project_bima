const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/resepmasakan");

const Schema = mongoose.Schema;

const resepSchema = new Schema({
    judul : String,
    kategori : String,
    resep : String,
    gambar : String,
    penulis : String
});

const Resep = mongoose.model("resep", resepSchema);

module.exports = Resep;