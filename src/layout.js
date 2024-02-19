import Aside from "./components/aside.js";
import { renderHeader } from "./components/lib.js";

const template = `
  <main class="main">
    ${renderHeader()}
    ${Aside}
    <div class="js-content content">
    </div>
  </main>
  `;

const Layout = {
  toString() {
    return template;
  },
  addListeners() {
    Aside.addListeners();
  },
};

export default Layout;
