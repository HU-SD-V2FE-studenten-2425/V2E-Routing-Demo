import { LitElement, html, css } from 'lit';
import { when } from "lit/directives/when.js";
import { userController } from "../../controller/user-controller";
import { Router } from '@vaadin/router';

const HOME_PATH = import.meta.env.BASE_URL;

export class MenuBar extends LitElement {

  static styles = css`
    nav {
      background-color: #333;
      color: white;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      list-style-type: none;
      padding: 1rem;
    }
    li {
      margin-right: 10px;
    }
    a {
      color: white;
      text-decoration: none;
      padding: .5rem;
    }
    a:hover {
      color: black;
      background-color: white;
    }
  `;

  static properties = {
    isLoggedIn: { type: Boolean }
  }

  connectedCallback() {
    super.connectedCallback();
    this.isLoggedIn = userController.isLoggedIn();

    this.username = userController.getCurrentUser();
  }

  logout() {
    this.isLoggedIn = userController.logout();
    Router.go(HOME_PATH);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./course">Courses</a></li>
          <li>
            ${when(this.isLoggedIn,
              () => html`<button @click=${this.logout}>Logout ${this.username.name}</button>`,  
              () => html`<a href="./login">Login</a>`
            )}
          </li>
          <li></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('menu-bar', MenuBar);