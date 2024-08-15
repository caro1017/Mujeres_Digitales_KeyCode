// ---- VARIABLES ----- //

// ========== Let ========== //
// -- Cuando el dato no va cambiar dentro del modificador --
let edadUsuario = 25;
//console.log("Let", edadUsuario);
edadUsuario = 26;
//console.log("Let", edadUsuario);

// ========== Const ========== //
const nombreUsuario = "Maria";
//console.log("nombreUsuario", nombreUsuario);

// ========== Condicionales ========== //
const edadMinima = 18;
const usuario = { nombre: "Maria", edad: 20 };

// ========== if else ========== //
if (usuario.edad >= edadMinima) {
  //console.log("Puedes entrar a la Discoteca :)");
}
if ((usuario.nombre = "Maria")) {
  //console.log("Puedes entrar a la Discoteca :)");
} else {
  //console.log("No Puedes entrar a la Discoteca :(");
}

// -- Modo estricto
const numero = 2;
const numeroStr = "verion" + "2.0";
//console.log(numero === numeroStr);

// ========== Operador ternario ========== //
const bandera = true;
const pais = "Ecuador";
const comida = "Bandeja Paisa";

/* bandera && pais === "Colombia"
  ? console.log("VIVA COLOMBIA")
  : console.log("Ya no viva colombia"); */

const name = null;
const usuario2 = name ?? "Defecto";
//console.log(usuario2);

// ========== For ========== //

let totalPares = 0;
let totalImpares = 0;

const inicio = 1;
const fin = 20;

for (let i = 0; inicio < i <= fin; i++) {
  if (i % 2 === 0) {
    totalPares++;
    //console.log(`el numero ${i} es par`);
  } else {
    totalImpares++;
    //console.log(`el numero ${i} es Impar`);
  }
}

//console.log(`Total numeros pares: ${totalPares} `);
//console.log(`Total numeros Impares: ${totalImpares} `);

// ========== While ========== //
const limite = 100;

let suma = 0;
let numero1 = 1;

while (suma < limite) {
  suma += numero1;
  //console.log(`Nuemero: ${numero1}, suma acumulada: ${suma}`);
  numero1++;
}

//console.log(`La suma supero el limite de ${limite}`);
//console.log(`El ultimo numero sumado fue ${numero1 - 1}`);

// ========== Functions ========== //

const calcularAreaCirculo = (radio) => {
  const area = Math.PI * Math.pow(radio, 2);
  return area;
};

const radio = 5;
const respuesta = calcularAreaCirculo(radio);
//console.log(respuesta);

const sumaNumeros = (a, b) => {
  const suma = a + b;
  return suma;
};

const respuestaSuma = sumaNumeros(5, 5);
//console.log(respuestaSuma)

// ========== Arrays ========== //
let tareas = ["lavar la ropa", "Hacer la compra", "Estudiar JavaScript"];

console.log("1.", tareas);
// push Ingresar un valor al arreglo
tareas.push("Llamar a mi mamá");
console.log("2. ", tareas);
// shift Eliminar el primer valor del arreglo
tareas.shift();
console.log("3. ", tareas);

// indexOf buscar el valor especifico
const indice = tareas.indexOf("Hacer la compra");
// splice Eliminar en un lugar especifico
if (indice !== -1) {
  tareas.splice(indice, 1);
}

console.log("4. ", tareas);

// Recorrer el arreglo
tareas.map((tarea) => {
  console.log(tarea);
});
