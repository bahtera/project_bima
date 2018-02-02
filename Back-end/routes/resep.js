const express = require("express");
const Resep = require("../models/resep");

const router = express.Router();

module.exports = function(passport){

    router.get("/detail/:id", (req, res) => {
        Resep.findById(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }else{
                res.json(result);
            }
        });
    })
    router.get("/sumatera", (req, res) => {
        Resep.find({ kategori: "Sumatera dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/jawa", (req, res) => {
        Resep.find({ kategori: "Jawa, Madura dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/kalimantan", (req, res) => {
        Resep.find({ kategori: "Kalimantan dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/sulawesi", (req, res) => {
        Resep.find({ kategori: "Sulawesi dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/maluku", (req, res) => {
        Resep.find({ kategori: "Maluku dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/bali-nusra", (req, res) => {
        Resep.find({ kategori: "Bali, Nusa Tenggara dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/papua", (req, res) => {
        Resep.find({ kategori: "Papua dan Sekitarnya" }, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    })

    router.get("/", (req, res) => {
        Resep.find({}, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        });
    });

    router.post("/", passport.authenticate("auth",{session:false}), (req, res) => {
        if (!req.files.gambar) {
            return res.status(400).send("No files were uploaded");
        }

        let image = req.files.gambar;
        let date = new Date();
        let imageName = date.getTime() + ".png";

        image.mv("./public/gambar/" + imageName, (error) => {
            let newResep = new Resep({
                judul: req.body.judul,
                kategori: req.body.kategori,
                resep: req.body.resep,
                gambar: "http://localhost:3000/gambar/" + imageName,
                penulis: req.body.penulis
            });

            newResep.save((error) => {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(newResep);
                }
            })
        });
    });

    router.put('/edit/:id', passport.authenticate("auth",{session:false}), function (req, res, next) {
        if (!req.files.gambar) {
            return res.status(400).send("No files were uploaded");
        }

        let image = req.files.gambar;
        let date = new Date();
        let imageName = date.getTime() + ".png";

        image.mv("./public/gambar/" + imageName, (error) => {
            let newResep = {
                judul: req.body.judul,
                kategori: req.body.kategori,
                resep: req.body.resep,
                gambar: "http://localhost:3000/gambar/" + imageName,
                penulis: req.body.penulis
            };

            Resep.findByIdAndUpdate(req.params.id, newResep, function (err, post) {
                if (err) return next(err);
                res.json(post);
            });
        });
        
    });

    router.delete("/:id", passport.authenticate("auth",{session:false}), (req, res) => {
        Resep.findByIdAndRemove(req.params.id, (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json({ message: "Data deleted" });
            }
        });
    });


    return router;
}