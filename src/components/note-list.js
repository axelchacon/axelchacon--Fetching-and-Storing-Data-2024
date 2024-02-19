import { renderNotes } from "./lib.js";
import { Content, loadContent } from "../loader.js";
import STORE from "../store.js";
import NotesPage from "./notes-page.js";

function listenToolTips() {
  const container = document.querySelector(".js-notes");
  if (!container) return;
  container.addEventListener("mouseover", (e) => {
    const tooltips = container.querySelectorAll(".tooltip");
    tooltips.forEach((tooltip) => {
      const trigger = tooltip.querySelector(".tooltip-trigger");
      const content = tooltip.querySelector(".tooltip-content");
      const onMouseLeave = (e) => {
        if (tooltip === e.target) {
          tooltip.removeEventListener("mouseleave", onMouseLeave);
          content.classList.add("hidden");
        }
      };
      if (trigger === e.target) {
        content.classList.remove("hidden");
        tooltip.addEventListener("mouseleave", onMouseLeave);
      }
    });
  });
  container.addEventListener("click", (e) => {
    const triggers = container.querySelectorAll(".tooltip-option");
    triggers.forEach((trigger) => {
      if (trigger === e.target) {
        e.preventDefault();
        STORE.notes = STORE.notes.map((note) => {
          if (note.id === trigger.closest(".note").dataset.id) {
            return { ...note, color: trigger.dataset.color };
          }
          return note;
        });
        loadContent();
      }
    });
  });
}

function listenTrash() {
  const container = document.querySelector(".js-notes");
  if (!container) return;
  container.addEventListener("click", (e) => {
    const trashBins = container.querySelectorAll(".trash-trigger");
    trashBins.forEach((trashBin) => {
      if (trashBin === e.target) {
        e.preventDefault();
        const parentNote = trashBin.closest(".note");
        parentNote.classList.add("shrinkOut");
        parentNote.addEventListener("animationend", (e) => {
          Content.load(NotesPage);
        });
        STORE.notes = STORE.notes.map((note) => {
          if (note.id === parentNote.dataset.id) {
            return { ...note, deleted: true };
          }
          return note;
        });
      }
    });
  });
}

const NoteList = {
  toString() {
    return renderNotes();
  },
  addListeners() {
    listenToolTips();
    listenTrash();
  },
};

export default NoteList;
