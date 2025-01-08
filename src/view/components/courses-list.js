import { LitElement, css, html } from 'lit';
import { coursesController } from '../../controller/courses-controller';

export class CoursesList extends LitElement {

  static properties = {
    courses: { type: Array }
  }

  constructor() {
    super();
    this.courses = [];
  }

  connectedCallback() {
    super.connectedCallback();
    coursesController.getCourses()
    .then((courses) => {
      this.courses = courses;
      console.log('connectedCallback', this.courses);
    })
  }
    

  render() {

    console.log('render', this.courses);

    return html`
      <h1>Courses</h1>
      <ul>
        <li></li>
      </ul>
    `;
  }
}

customElements.define('courses-list', CoursesList);