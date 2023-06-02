export function validarNombreYContrasena(nombre, contrasena) {
  // Validar el campo de nombre
  if (nombre.length <= 4) {
    return {
      status: 400,
      mensaje: "El nombre debe contener más de cuatro caracteres.",
    };
  }

  // Validar el campo de contraseña
  if (contrasena.length < 6) {
    return {
      status: 400,
      mensaje: "La contraseña debe contener al menos seis caracteres.",
    };
  }

  // Validar que la contraseña contenga al menos un dígito y un símbolo
  const digitos = /[0-9]/;
  const simbolos = /[$-/:-?{-~!"^_`\[\]]/;

  if (!digitos.test(contrasena) || !simbolos.test(contrasena)) {
    return {
      status: 400,
      mensaje: "La contraseña debe contener al menos un dígito y un símbolo.",
    };
  }

  // Si ambos campos pasan las validaciones, retornamos null para indicar que son válidos
  return null;
}
