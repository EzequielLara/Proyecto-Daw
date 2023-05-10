import { MongoClient } from "mongodb";

const crudUsuarios = async (req, res) => {
  const client = await MongoClient.connect(process.env.CONEXION_DB);
  client.connect((err) => {
    if (err) {
      console.log("Error al conectarse a la base de datos", err);
      return;
    }
    console.log("Conectado a la base de datos");
  });
  const db = client.db("vocablo");
  const collection = db.collection("usuarios");

  try {
    switch (req.method) {
      case "POST":
        const { email, password } = req.body;
        const usuarioExistente = await collection.findOne({ email, password });
        return usuarioExistente;

      default:
        return "Método HTTP no permitido";
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en la conexión con la base de datos");
  } finally {
    await client.close();
  }
};
export default crudUsuarios;
