import { coursesService } from '../service/courses-service';

class CoursesController {

  constructor(courseServiceInstance) {
    this.courseService = courseServiceInstance;
  }

  getCourses() {
    return this.courseService.getCourses();
  }
}

const coursesController = new CoursesController(coursesService);

export { coursesController };