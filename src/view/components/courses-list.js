import { LitElement, css, html } from 'lit';

export class CoursesList extends LitElement {
  render() {
    return html`
      <h1>Courses</h1>
      <ul>
        <li></li>
      </ul>
    `;
  }
}

customElements.define('courses-list', CoursesList);