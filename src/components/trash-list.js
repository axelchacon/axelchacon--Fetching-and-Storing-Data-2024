import { loadContent } from "../loader.js";
import STORE from "../store.js";
import { renderTrashNotes } from "./lib.js";

const template = () => renderTrashNotes();

function listenDelete() {
  const container = document.querySelector(".js-notes");
  if (!container) return;
  container.addEventListener("click", (e) => {
    const trashBins = container.querySelectorAll(".delete-trigger");
    trashBins.forEach((trashBin) => {
      if (trashBin === e.target) {
        e.preventDefault();
        const parentNote = trashBin.closest(".note");
        parentNote.classList.add("trashOut");
        parentNote.addEventListener("animationend", (e) => {
          loadContent();
        });
        STORE.notes = STORE.notes.filter(
          (note) => note.id !== parentNote.dataset.id
        );
      }
    });
  });
}

function listenRestore() {
  const container = document.querySelector(".js-notes");
  if (!container) return;
  container.addEventListener("click", (e) => {
    const restoreArrows = container.querySelectorAll(".restore-trigger");
    restoreArrows.forEach((restoreArrow) => {
      if (restoreArrow === e.target) {
        e.preventDefault();
        const parentNote = restoreArrow.closest(".note");
        parentNote.classList.add("goBack");
        parentNote.addEventListener("animationend", (e) => {
          loadContent();
        });
        STORE.notes = STORE.notes.map((note) => {
          if (note.id === parentNote.dataset.id) {
            return { ...note, deleted: false };
          }
          return note;
        });
      }
    });
  });
}

const TrashList = {
  toString() {
    return template();
  },
  addListeners() {
    listenDelete();
    listenRestore();
  },
};

export default TrashList;
