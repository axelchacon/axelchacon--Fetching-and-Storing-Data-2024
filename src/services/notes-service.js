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
////Crear notas
async function createNote(token, newNote) {
  try {
    const response = await fetch(`${BASE_URI}/notes`, {
      method: "POST",
      headers: {
        Authorization: `Token token=${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

////Delete notas
async function deleteNote(token, id) {
  try {
    const response = await fetch(`${BASE_URI}/notes/${id}`, {
      method: "DELETE",
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

////Update notas
async function updateNote(token, id, noteData) {
  try {
    const response = await fetch(`${BASE_URI}/notes/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token token=${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export { getNotes, getNote, createNote, deleteNote, updateNote };
