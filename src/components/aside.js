import { loadContent } from "../loader.js";
import STORE from "../store.js";

const template = `
  <aside class="aside">
    <ul>
      <li data-value="notes" class="selected">
        <a href="#notes">Notes</a>
      </li>
      <li data-value="trash"><a href="#trash">Trash</a></li>
    </ul>
  </aside>
  `;

function setSelectedAsideItem() {
  const items = document.querySelectorAll(".aside li");
  const selectedItem = Array.from(items).find(
    (item) => item.dataset.value === STORE.currentSection
  );
  items.forEach((item) => item.classList.remove("selected"));
  selectedItem.classList.add("selected");
}

function listenAsideClick() {
  const anchors = document.querySelectorAll(".aside a");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      STORE.currentSection = anchor.closest("li").dataset.value;
      setSelectedAsideItem();
      loadContent();
    });
  });
}

const Aside = {
  toString() {
    return template;
  },
  addListeners() {
    listenAsideClick();
  },
};

export default Aside;
