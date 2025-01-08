import { userService } from '../service/user-service.js';

export class UserController {
  constructor(userServiceInstance) {
    this.userService = userServiceInstance;
    this.currentUser = null;
  }

  login(userId) {
    return this.userService.getUser(userId)
      .then((user) => {
        if (!user) {
          throw new Error('User not found');
        }
        this.currentUser = user;
        return user;
      });
  }

  logout() {
    this.currentUser = null;
    return this.isLoggedIn();
  }

  isLoggedIn() {
    return Boolean(this.currentUser);
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

const userController = new UserController(userService);

export { userController };