class CourseService {

  constructor() {
    this.courses = [];
    this.init();
  }

  init() {
    this.courses = [
      {
        "code": "FEP1",
        "name": "Front-End Programming 1",
        "description": "Learn the basics of front-end programming with HTML, CSS, and JavaScript."
      },
      {
        "code": "FEP2",
        "name": "Front-End Programming 2",
        "description": "Learn intermediate front-end programming with Lit, Redux, and more."
      },
      {
        "code": "BEP1",
        "name": "Back-End Programming 1",
        "description": "Learn the basics of back-end programming with Java and Tomcat."
      }
    ];
  }

  getCourses() {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }
}

const coursesService = new CourseService();

export { coursesService };