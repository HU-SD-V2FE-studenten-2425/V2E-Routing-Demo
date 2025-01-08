import { coursesService } from '../service/courses-service';

class CoursesController {

  constructor(courseServiceInstance) {
    this.courseService = courseServiceInstance;
  }

  getCourses() {
    return this.courseService.getCourses();
  }

  getCourse(courseID) {
    return this.courseService.getCourse(courseID);
  }
}

const coursesController = new CoursesController(coursesService);

export { coursesController };