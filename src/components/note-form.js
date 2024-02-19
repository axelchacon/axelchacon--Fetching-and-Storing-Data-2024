import { renderToolTip } from "./lib.js";
import { loadContent } from "../loader.js";
import STORE from "../store.js";

const template = `
  <form class="js-note-form note-form">
    <input
      name="title"
      type="text"
      class="note-form__title"
      placeholder="The title for my new note"
    />
    <textarea
      name="body"
      class="note-form__body"
      placeholder="This is the body for the note."
    ></textarea>
    <footer>
      ${renderToolTip()}
      <button type="submit">Keep it!</button>
    </footer>
  </form>
  `;

function listenTooltip() {
  const tooltip = document.querySelector(".js-note-form .tooltip");
  tooltip.addEventListener("mouseover", (e) => {
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
  tooltip.addEventListener("click", (e) => {
    const form = document.querySelector(".js-note-form");
    const triggers = tooltip.querySelectorAll(".tooltip-option");
    triggers.forEach((trigger) => {
      if (trigger === e.target) {
        e.preventDefault();
        const input = trigger
          .closest(".tooltip")
          .querySelector("input[name=color]");
        input.value = trigger.dataset.color;
        form.style.backgroundColor = `var(--${trigger.dataset.color})`;
      }
    });
  });
}

function listenFormSubmit() {
  const form = document.querySelector(".js-note-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let { title, body, color } = e.target;
    color = color.value === "" ? "white" : color.value;
    STORE.notes.push({
      id: uuidv4(),
      title: title.value,
      body: body.value,
      color: color,
    });
    e.target.reset();
    e.target.style.backgroundColor = "";
    loadContent();
  });
}

const NoteForm = {
  toString() {
    return template;
  },
  addListeners() {
    listenTooltip();
    listenFormSubmit();
  },
};

export default NoteForm;
