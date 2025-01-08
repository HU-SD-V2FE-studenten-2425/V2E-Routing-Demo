import { LitElement,html } from 'lit';
import '../components/menu-bar';

export class NoRightsPage extends LitElement {
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <h1>You don't have the right to see this page</h1>
      </main>
    `;
  }
}

customElements.define('no-rights-page', NoRightsPage);