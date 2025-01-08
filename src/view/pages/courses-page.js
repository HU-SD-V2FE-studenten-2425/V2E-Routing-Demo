import { LitElement, html } from 'lit';
import '../components/menu-bar';
import '../components/courses-list';

export class CoursesPage extends LitElement {
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <courses-list></courses-list>
      </main>
    `;
  }
}

customElements.define('courses-page', CoursesPage);