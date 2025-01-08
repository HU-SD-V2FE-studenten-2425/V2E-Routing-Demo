import "../components/menu-bar";
import "../components/about-content";
import { LitElement, html } from "lit";

export class AboutPage extends LitElement {
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <about-content></about-content>
      </main>
    `;
  }
}

customElements.define('about-page', AboutPage);
