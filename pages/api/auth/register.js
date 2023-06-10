import { MongoClient } from "mongodb";
import validarNombreYContrasena from "../../../shared/validaciones";

export default async function loginHandler(req, res) {
  const nombre = req.body.username;
  const contrasena = req.body.password || null;
  const email = req.body.email;
  const loginAuth = req.body.loginAuth;

  if (!loginAuth || loginAuth == null || loginAuth == undefined) {
    const error = validarNombreYContrasena(nombre, contrasena, email);
    if (error) {
      res.status(error.status).json({ error: error.mensaje });
    } else {
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
                .status(400)
                .json({ error: "Ya existe un usuario con ese email" });
              return;
            }
            await collection.insertOne({
              email,
              username,
              password,
              loginAuth: false,
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
    }
  } else {
    try {
      const db = client.db("vocablo");
      const collection = db.collection("usuarios");
      switch (req.method) {
        case "POST":
          const { email, username, loginAuth } = req.body;
          const usuarioExistente = await collection.findOne({ email });
          if (usuarioExistente) {
            res.status(200).json({ message: "Usuario encontrado" });
            break;
          }
          await collection.insertOne({
            email,
            username,
            loginAuth: true,
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
  }
}
