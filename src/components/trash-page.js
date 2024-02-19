import TrashList from "./trash-list.js";

const template = () => `
  <section class="section">
    ${TrashList}
  </section>
  `;

const Trashpage = {
  toString() {
    return template();
  },
  addListeners() {
    TrashList.addListeners();
  },
};

export default Trashpage;
