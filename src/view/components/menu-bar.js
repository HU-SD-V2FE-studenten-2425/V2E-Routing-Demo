import { LitElement, html, css } from 'lit';

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
  
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./course">Courses</a></li>
          <li></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('menu-bar', MenuBar);