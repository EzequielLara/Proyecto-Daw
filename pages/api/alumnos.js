import { MongoClient } from "mongodb";

function filtrarDatos(data) {
  const { password, ...datosFiltrados } = data;
  return datosFiltrados;
}

export default async function alumnos(req, res) {
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
      case "GET":
        const usuarios = await collection.findOne({
          username: req.query.username,
        });
        if (usuarios === undefined || usuarios === null) {
          res.status(500).json({ error: "No existe el usuario" });
        }
        const datosfiltrados = filtrarDatos(usuarios);
        console.log("valor de usuarios", datosfiltrados);
        res.status(200).json(datosfiltrados);
        break;
      case "POST":
        const { nombre, apellidos, curso, grupo } = req.body;
        const resultado = await collection.insertOne({
          nombre,
          apellidos,
          curso,
          grupo,
        });
        res.status(201).json(resultado.ops[0]);
        break;
      case "PUT":
        const { id } = req.query;
        const {
          nombre: nombreActualizado,
          apellidos: apellidosActualizados,
          curso: cursoActualizado,
          grupo: grupoActualizado,
        } = req.body;
        const resultadoActualizacion = await collection.updateOne(
          { _id: ObjectId(id) },
          {
            $set: {
              nombre: nombreActualizado,
              apellidos: apellidosActualizados,
              curso: cursoActualizado,
              grupo: grupoActualizado,
            },
          }
        );
        res.status(200).json(resultadoActualizacion);
        break;
      case "DELETE":
        const { id: idBorrar, username } = req.query;
        const resultadoBorrar = await collection.updateOne(
          { username },
          { $pull: { alumnos: { id: Number(idBorrar) } } }
        );
        res.status(200).json(resultadoBorrar);
        break;
      default:
        res.status(400).send("Método HTTP no permitido");
        break;
    }
  } catch (error) {
    res.status(500).send("Error en la conexión con la base de datos");
  } finally {
    await client.close();
  }
}
