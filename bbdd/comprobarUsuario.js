import { MongoClient } from "mongodb";

const comprobarUsuario = async (req, res) => {
  const client = await MongoClient.connect(process.env.CONEXION_DB);
  try {
    const db = client.db("vocablo");
    const collection = db.collection("usuarios");
    switch (req.method) {
      case "POST":
        const { email, username, password } = req.body;
        const usuarioExistente = await collection.findOne({ email });
        if (usuarioExistente) {
          res
            .status(200)
            .json({
              message: "El usuario se encuentra ya creado en la base de datos",
            });
          return;
        }
        await collection.insertOne({
          email,
          username,
          password,
          cursos: [],
          alumnos: [],
        });
        res.status(200).json({ message: "Usuario creado correctamente" });
        break;
      default:
        res.status(405).json({ error: "Método HTTP no permitido" });
        break;
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error en la conexión con la base de datos" });
  } finally {
    await client.close();
  }
};

export default comprobarUsuario;
