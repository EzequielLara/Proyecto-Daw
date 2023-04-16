import { MongoClient } from "mongodb";

export default async function alumnos(req, res) {
  const client = await MongoClient.connect(process.env.CONEXION_DB);
  const db = client.db("vocablo");
  const collection = db.collection("usuarios");
  const usuarios = await collection.find({}).toArray();
  res.json(usuarios);
  await client.close();
}
