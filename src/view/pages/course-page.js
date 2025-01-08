import { LitElement, html } from 'lit';
import '../components/menu-bar';
import '../components/course-info';

export class CoursePage extends LitElement {
  render() {
    return html`
      <menu-bar></menu-bar>
      <main>
        <course-info></course-info>
      </main>
    `;
  }
}

customElements.define('course-page', CoursePage);