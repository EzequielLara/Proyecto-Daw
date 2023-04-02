import { verify } from "jsonwebtoken";

export default function handler(req, res) {
  const { myTokenName } = req.cookies;

  if (!myTokenName) {
    return res.status(401).json({ error: "no token" });
  }
  try {
    const user = verify(myTokenName, "secret");
    console.log("usuario:", user);
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    return res.status(401).json({ error: "acceso denegado" });
  }
}
