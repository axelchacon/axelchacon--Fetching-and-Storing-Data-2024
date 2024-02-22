const BASE_URI = "https://keepable-api.herokuapp.com";
////Obtener todas las listas de mi API , lo puedes visualizar en el Insonmia
async function getNotes(token) {
  try {
    const response = await fetch(`${BASE_URI}/notes`, {
      method: "GET",
      headers: {
        Authorization: `Token token=${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
////Obtener solo una lista que quiero  de mi API , lo puedes visualizar en el Insonmia
async function getNote(token, id) {
  try {
    const response = await fetch(`${BASE_URI}/notes/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Token token=${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export { getNotes, getNote };
