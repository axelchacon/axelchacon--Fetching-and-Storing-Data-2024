// import { loadContent } from "./src/loader.js";

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
  })
  .catch((error) => console.log(error.message)); //Esto permite que cuando haya error vengan a este línne a de código garcias al if de la línea 25
