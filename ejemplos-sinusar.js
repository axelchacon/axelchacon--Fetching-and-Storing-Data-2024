///////////////////////////////ejemplo 1 ///////////////////////////////
// Ejemplo de promesa resuelta después de un segundo
// console.log("Esperando 0...");
// const promesa = new Promise((resolve) => {
//   console.log("Esperando 1...");
//   setTimeout(() => {
//     resolve("¡La operación se ha completado!");
//   }, 1000);
//   console.log("Esperando 2...");
// });
// console.log("Esperando 3...");
// // Utilizando la promesa
// promesa.then((resultado) => {
//   console.log(resultado);
// });
// console.log("Esperando 4...");

///////////////////////////////ejemplo 2 ///////////////////////////////

// Ejemplo de promesa que se rechaza después de un segundo
// console.log("Esperando 1...");
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("¡La operación ha fallado!"));
//   }, 1000);
// });

// // Manejo del error
// promesa.catch((error) => {
//   console.error(error.message);
// });
// console.log("Esperando 2...");

///////////////////////////////ejemplo 3 ///////////////////////////////
// const fetch = require("node-fetch");

// // Promesa para obtener datos de una API
// const obtenerDatos = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch((error) => reject(error));
// });

// // Utilizando la promesa
// obtenerDatos.then((data) => {
//   console.log("Título:", data.title);
//   console.log("Cuerpo:", data.body);
// });
///////////////////////////////ejemplo 4 ///////////////////////////////

// fetch("https://ejemplo.com/api") ////fecth es una promesa
//   .then((respuesta) => {
//     // procesar respuesta cuando esté lista
//   })
//   .catch((error) => {
//     // manejar error
//   });

///////////////////////////////ejemplo 5 ///////////////////////////////////
// console.log("Esperando 1...");
// // Ejemplo de función asíncrona
// async function ejemploAsincronico() {
//   // Operación asincrónica simulada que devuelve una promesa
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Resuelve la promesa después de 1 segundo
//       resolve("¡Operación asincrónica completada!");
//     }, 1000);
//   });
// }
// // mipromesa
// //   .then((resultado) => console.log(resultado))
// //   .catch((error) => console.log(error.message));
// // Tu código está utilizando una función asíncrona (async function ejemploAsincronico())
// // y devuelve una promesa directamente. En este caso, la función síncrona ejemploAsincronico() se comporta como una promesa.
// // Para ejecutar y obtener el resultado de la promesa devuelta por la función asíncrona,
// // necesitas utilizar await dentro de una función asíncrona. Aquí hay un ejemplo ajustado:
// console.log("Esperando 2...");
// // Uso de la función asíncrona
// async function usarEjemploAsincronico() {
//   try {
//     // Llama a la función asíncrona y espera a que se resuelva la promesa
//     const resultado = await ejemploAsincronico();
//     console.log(resultado);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// // Llama a la función que utiliza la función asíncrona
// usarEjemploAsincronico();

///////////////////////////////ejemplo 6 ///////////////////////////////////

// const mipromesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("¡Operación asincrónica completada!");
//   }, 1000);
// });

// mipromesa
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error.message));

///////////////////////////////ejemplo 7 ///////////////////////////////////

// console.log("Esperando 1...");
// // Ejemplo de función asíncrona
// async function ejemploAsincronico() {
//   // Operación asincrónica simulada que devuelve una promesa
//   try {
//     // Llama a la función asíncrona y espera a que se resuelva la promesa
//     const pormesa = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Resuelve la promesa después de 1 segundo
//         resolve("¡Operación asincrónica completada!");
//       }, 1000);
//     });
//     pormesa.then((resultado = console.log(resultado)));
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// console.log("Esperando 2...");
// // Uso de la función asíncrona

// // Llama a la función que utiliza la función asíncrona
// ejemploAsincronico();

///////////////////////////////ejemplo 8 : Operación Asíncrona con Await:///////////////////////////////////

// Función que devuelve una promesa que se resuelve después de 2 segundos
// async function operacionAsincrona() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Operación asíncrona completada");
//     }, 2000);
//   });
// }

// // Función async que espera a que la operación asíncrona se complete
// async function ejecutarOperacionAsincrona() {
//   const resultado = await operacionAsincrona();
//   console.log(resultado);
// }

// // Llamada a la función
// ejecutarOperacionAsincrona();

///////////////////////////////ejemplo 9 : Manejo de Errores con Try-Catch:///////////////////////////////////
//   // Función que simula una operación asíncrona que falla
// async function operacionAsincrona() {
//     throw new Error("¡La operación ha fallado!");
//   }

//   // Función async que maneja el error con try-catch
//   async function ejecutarOperacionAsincrona() {
//     try {
//       await operacionAsincrona();
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   // Llamada a la función
//   ejecutarOperacionAsincrona();
///////////////////////////////ejemplo 10 : Varias Operaciones Asíncronas:///////////////////////////////////
// Función que devuelve una promesa que se resuelve después de un tiempo aleatorio
// async function operacionAsincrona(id) {
//   return new Promise((resolve) => {
//     const retraso = Math.random() * 1000;
//     setTimeout(() => {
//       resolve(`Operación ${id} completada`);
//     }, retraso);
//   });
// }

// // Función async que ejecuta varias operaciones asíncronas y espera a que todas se completen
// async function ejecutarOperacionesAsincronasMultiples() {
//   const promesas = [
//     operacionAsincrona(1),
//     operacionAsincrona(2),
//     operacionAsincrona(3),
//   ];
//   const resultados = await Promise.all(promesas);
//   console.log(resultados);
// }

// // Llamada a la función
// ejecutarOperacionesAsincronasMultiples();

///////////////////////////////ejemplo 11 :Uso de Async en Funciones Anónimas:///////////////////////////////////

// Función async en una expresión de función
// const funcionAsincrona = async () => {
//   return "¡Hola desde una función async!";
// };

// // Función async inmediatamente invocada (IIFE)
// (async () => {
//   const resultado = await funcionAsincrona();
//   console.log(resultado);
// })();

///////////////////////////////ejemplo 12 :Operaciones Asíncronas con Condicionales///////////////////////////////////

// Función que simula una operación asíncrona con un resultado basado en una condición
// async function operacionAsincrona(condicion) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (condicion) {
//         resolve("Condición verdadera");
//       } else {
//         resolve("Condición falsa");
//       }
//     }, 1000);
//   });
// }

// // Función async que ejecuta la operación y muestra el resultado basado en una condición
// async function ejecutarOperacionAsincrona() {
//   const resultado = await operacionAsincrona(true);
//   console.log(resultado);
// }

// // Llamada a la función
// ejecutarOperacionAsincrona();

///////////////////////////////ejemplo 13 Mira el ejemplo 7///////////////////////////////////

// async function ejemploAsincronico() {
//   // Operación asincrónica simulada que devuelve una promesa
//   try {
//     // Llama a la función asíncrona y espera a que se resuelva la promesa
//     const promesa = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Resuelve la promesa después de 1 segundo
//         resolve("¡Operación asincrónica completada!");
//       }, 1000);
//     });

//     // Espera a que la promesa se resuelva antes de continuar
//     const resultado = await promesa;
//     console.log("Esperando 0...");
//     console.log(resultado);
//     console.log("Esperando 1...");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// console.log("Esperando 2...");
// // Llama a la función que utiliza la función asíncrona
// ejemploAsincronico();
// console.log("Esperando 3...");
//// Resultado en terminal:
//    Esperando 2... (aparecen primero)
//    Esperando 3... (aparecen primero)
//    Esperando 0... (aparecen al último)
//    ¡Operación asincrónica completada!  (aparecen al último)
//     Esperando 1... (aparecen al último)

///////////////////////////////ejemplo 14 :Operaciones Asíncronas con Condicionales, Mira el ejemplo 7///////////////////////////////////

// function ejemploAsincronico() {
//   // Operación asincrónica simulada que devuelve una promesa
//   const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Resuelve la promesa después de 1 segundo
//       resolve("¡Operación asincrónica completada!");
//     }, 1000);
//   });

//   // Utiliza .then() y .catch() para manejar la resolución y el rechazo de la promesa
//   promesa
//     .then((resultado) => {
//       console.log(resultado);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// console.log("Esperando 2...");

// // Llama a la función que utiliza la promesa
// ejemploAsincronico();

//////////////////////////////ejemplo 15 :Operaciones Asíncronas con Condicionales, Mira el ejemplo 7///////////////////////////////////

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ejemplo City",
};

const jsonPersona = JSON.stringify(persona);
console.log(jsonPersona);
