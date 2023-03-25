import { verify } from "jsonwebtoken";

export default function handler(req, res) {
  const { myTokenName } = req.cookies;
  try {
    const user = verify(myTokenName, "secret");
    console.log("usuario:", user);
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    return res.status(401).json({ error: "acceso denegado" });
  }
}
