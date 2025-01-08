import { LitElement, html, css } from 'lit';
import '../components/menu-bar';

export class PageNotFound extends LitElement {
  static styles = css`
    h1 {
      color: red;
    }
  `;
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <h1>Page Not Found (404)</h1>
      </main>
    `;
  }
}

customElements.define('page-not-found', PageNotFound);