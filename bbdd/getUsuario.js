import { MongoClient } from "mongodb";

const getUsuario = async (req, res) => {
  const client = await MongoClient.connect(process.env.CONEXION_DB);
  client.connect((err) => {
    if (err) {
      return { Error: "Error al conectarse a la base de datos" };
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
        return { Error: "Método HTTP no permitido" };
    }
  } catch (error) {
    console.log(error);
    return { Error: "Error en la conexión con la base de datos" };
  } finally {
    await client.close();
  }
};
export default getUsuario;
