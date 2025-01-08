import { LitElement, html } from 'lit';
import '../components/menu-bar';
import '../components/user-login';

export class LoginPage extends LitElement {

  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <user-login></user-login>
      </main>
    `;
  }
}

customElements.define('login-page', LoginPage);