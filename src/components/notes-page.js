import NoteForm from "./note-form.js";
import NoteList from "./note-list.js";

const template = () => `
  <section class="section">
    ${NoteForm}
    ${NoteList}
  </section>
  `;

const NotesPage = {
  toString() {
    return template();
  },
  addListeners() {
    NoteForm.addListeners();
    NoteList.addListeners();
  },
};

export default NotesPage;
