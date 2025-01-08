class UserService {
  constructor() {
    this.users = [
      { id: 1, name: 'Thomas' },
      { id: 2, name: 'Dina' },
      { id: 3, name: 'Kasper' },
    ];
  }

  getUsers() {
    return new Promise((resolve) => {
      resolve([...this.users]);
    });
  }

  getUser(userId) {
    return new Promise((resolve) => {
      resolve(this.users.find((user) => user.id === userId));
    });
  }
}

const userService = new UserService();

export { userService };