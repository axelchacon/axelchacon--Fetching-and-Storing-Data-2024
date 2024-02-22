import { loadContent } from "./src/loader.js";
import { getNotes, getNote } from "./src/services/notes-service.js";
import STORE from "./src/store.js";
// loadContent();
const base_uri = "https://keepable-api.herokuapp.com";

const url = `${base_uri}/login`;
const credentials = {
  username: "codeable",
  password: "123456",
};
const response = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(credentials),
});
// console.log(response);
// response.then((data) => console.log(data));
// response.then((data) => console.log(data));
response
  .then((data) => data.json())
  .then((result) => {
    if (Array.isArray(result)) throw new Error(result.join(","));

    const token = result.token;
    console.log(token);
    ////obtener todas las notas GET mandando token

    // getNotes(token).then((notas) => {
    //   STORE.notes = notas;
    //   loadContent();
    // });

    //obtener solo una nota nuetsra metas GET mandando token en la misma consola
    // getNote(token, 647).then((note) => console.log(note));
    getNote(token, 647).then(console.log);
  })
  .catch((error) => console.log(error.message)); //Esto permite que cuando haya error vengan a este línne a de código garcias al if de la línea 25
// Obtener con GET las listas
//Renderizar las listas con Store.notes
