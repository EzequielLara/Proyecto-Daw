import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function loginHandler(req, res) {
  const { email, password } = req.body;
  //validación con la bbdd
  // si email existe
  // si el password es correcto
  // Datos harcodeados:
  if (email === "eze@eze" && password === "eze") {
    //generar un token jwt
    const token = jwt.sign(
      {
        email: email,
        username: "Ezek",
        exp: Math.floor(Date.now() / 1000) * 60 * 60 * 24 * 30,
      },
      process.env.SECRET_JWT
    );
    // para no enviar el token directamente y sea facilmente identificable
    // mejor serializarlo antes (proceso de convertir un objeto en una secuencia de bytes para almacenarlo)
    const serialized = serialize("myTokenName", token, {
      //este tercer valor del metodo serialize no es obligatorio
      //cuando se esté en producción cambiar la variable NODE_ENV del archivo .env.local por 'production'
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ exito: "login satisfactorio" });
  }
  return res.status(401).json({ error: "Email o Password no válidos" });
}
