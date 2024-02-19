import NotesPage from "./components/notes-page.js";
import Trashpage from "./components/trash-page.js";
import DOMHandler from "./dom-handler.js";
import STORE from "./store.js";
import Layout from "./layout.js";

function loadContent() {
  switch (STORE.currentSection) {
    case "notes":
      Content.load(NotesPage);
      break;
    case "trash":
      Content.load(Trashpage);
      break;

    default:
      break;
  }
}

const App = DOMHandler("#root");
App.load(Layout);

const Content = DOMHandler(".js-content");

export { loadContent, Content };
