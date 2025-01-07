import { LitElement, html, css } from 'lit';

export class HomeContent extends LitElement {

  static styles = css`
    h1 {
      color: blue;
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<h1>Home</h1>`;
  }
}

customElements.define('home-content', HomeContent);