module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama: String,
      tanggal_lahir: String,
      nim: String,
      jurusan: String,
      fakultas: String,
      angkatan: String,
      status: String,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model("mahasiswa", schema);
};
