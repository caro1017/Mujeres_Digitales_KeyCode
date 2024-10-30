const encryptedMessage =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";
let decryptedMessage = "";

// Mapa de símbolos a letras (cada símbolo representa una única letra)
const substitutionMap = {
  "?": "a", // a -> ?
  "[": "e", // e -> [
  "\\": "i", // i -> \\
  "~": "o", // i -> ~
  "+": "u", // o -> +
  "¬": "ó", // ó -> +
  "(": " ", // espacio en blanco
  ")": " ", // espacio en blanco
  "]": "n", 
  "¿": "y", 
  "`": "c", 
  "=": "t", 
  "^": "m", 
  "-": "h",
  "*": "p",
  "/": "l",
  "{": "s",
  ";": "f",
  "$": "r",
  "_": "z",
  "%": "b",
  "#": "v",
  "}": "q",
  "!": "j",
  "¡": "d",
};

// Construcción del mensaje desencriptado
for (let i = 0; i < encryptedMessage.length; i++) {
  const currentChar = encryptedMessage[i];

  // Verificar si el paréntesis representa un espacio
  if (currentChar === "(" && encryptedMessage[i + 1] === ")") {
    decryptedMessage += " ";
    i++; // Saltar el siguiente paréntesis
  } else {
    // Usar el mapa de sustitución para obtener la letra correspondiente
    decryptedMessage += substitutionMap[currentChar] || ""; // Agregar la letra correspondiente o vacío si no se encuentra
  }
}

console.log("Mensaje desencriptado:", decryptedMessage);
