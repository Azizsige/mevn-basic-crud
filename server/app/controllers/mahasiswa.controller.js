const db = require("../models");
const Mahasiswa = db.mahasiswa;

// Create and Save a new Mahasiswa
exports.findAll = (req, res) => {
  Mahasiswa.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);

  Mahasiswa.create(req.body)
    .then(() => {
      res.send({ message: "Mahasiswa berhasil ditambahkan" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.show = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);
  const id = req.params.id;

  Mahasiswa.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Mahasiswa with id=${id}. Mahasiswa not found!`,
        });
      }
      res.send({ message: "Mahasiswa berhasil diupdate" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Mahasiswa.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Mahasiswa with id=${id}. Mahasiswa not found!`,
        });
      }
      res.send({ message: "Mahasiswa berhasil dihapus" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
