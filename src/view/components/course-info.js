import { LitElement, html, css } from 'lit';
import { router } from '../router';
import { coursesController } from '../../controller/courses-controller';

export class CourseInfo extends LitElement {

  static properties = {
    course: { type: Object }
  }

  constructor() {
    super();
    this.course = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.courseId = router.location.params.code;

    coursesController.getCourse(this.courseId)
    .then((course) => {
      this.course = course;
    })
  }

  render() {
    return html`
      <h1>${this.course?.name}</h1>
      <p>${this.course?.description}</p>
    `;
  }
}

customElements.define('course-info', CourseInfo);