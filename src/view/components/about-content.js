import { LitElement, html, css } from 'lit';

export class AboutContent extends LitElement {

  static styles = css`
    h1 {
      color: blue
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`<h1>About</h1>`;
  }
}

customElements.define('about-content', AboutContent);