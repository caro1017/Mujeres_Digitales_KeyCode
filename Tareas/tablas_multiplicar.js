// ========== TAREA ========== //

// Hacer las tablas de multiplicar del 1 al 10, las 10 tablas de multiplicar //

for (let i = 1; i < 11; i++) {
  for (let index = 1; index < 11; index++) {
    const multiplicar = i * index;
    console.log(i, "X", index, "=", multiplicar);
  }
  console.log("");
}

