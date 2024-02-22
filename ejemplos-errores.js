console.log("Esperando 1...");
// Ejemplo de función asíncrona
async function ejemploAsincronico() {
  // Operación asincrónica simulada que devuelve una promesa
  try {
    // Llama a la función asíncrona y espera a que se resuelva la promesa
    const pormesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Resuelve la promesa después de 1 segundo
        resolve("¡Operación asincrónica completada!");
      }, 1000);
    });
    pormesa
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
console.log("Esperando 2...");
// Uso de la función asíncrona

// Llama a la función que utiliza la función asíncrona
ejemploAsincronico();
