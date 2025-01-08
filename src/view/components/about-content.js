import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router'

const HOME_PATH = import.meta.env.BASE_URL;

export class AboutContent extends LitElement {

  static styles = css`
    h1 {
      color: blue
    }

    button {
      background-color: green;
      color: white;
      border-radius: .5rem;
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  clickHandler() {
    // Geen goede oplossing omdat de pagina opnieuw geladen wordt.
    // location.href = '/';

    // beter, maar gaat naar de root van het domain
    // Router.go('/');

    Router.go(HOME_PATH);    
  }

  render() {
    return html`
      <h1>About</h1>
      <button @click=${this.clickHandler}>Go back to the home page</button>
    `;
  }
}

customElements.define('about-content', AboutContent);