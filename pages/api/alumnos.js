export default function alumnos(req, res) {
  res.status(200).json([
    {
      nombre: "pepe",
      edad: "6",
    },
    {
      nombre: "Juan",
      edad: "9",
    },
    {
      nombre: "Laura",
      edad: "8",
    },
  ]);
}
