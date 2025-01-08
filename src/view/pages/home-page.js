import "../components/menu-bar";
import "../components/home-content";
import { LitElement, html } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <home-content></home-content>
      </main>
    `;
  }
}

customElements.define('home-page', HomePage);
