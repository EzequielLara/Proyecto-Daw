import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import crudUsuarios from "../../../bbdd/crudUsuarios";

export default function loginHandler(req, res) {
  const { email, password } = req.body;
  const usuario = crudUsuarios(req, res)
    .then((e) => {
      if (e.email === email && e.password === password) {
        //generar un token jwt
        const token = jwt.sign(
          {
            email: e.email,
            username: e.username,
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
    })
    .catch((e) =>
      res.status(401).json({ error: "Email o Password no válidos" })
    );
}
