class Account {
  constructor() {
    this.usersKey = "users";
  }

  saveUser(user) {
    const users = this.getAllUsers();
    users[user.phoneNumber] = user;
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  getAllUsers() {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : {};
  }

  getUser(phoneNumber) {
    const users = this.getAllUsers();
    return users[phoneNumber] || null;
  }

  userExists(phoneNumber) {
    return !!this.getUser(phoneNumber);
  }

  cleanInvalidKeys() {
    const users = this.getAllUsers();

    for (const key in users) {
      if (!users[key] || users[key] === "undefined") {
        delete users[key];
      }
    }

    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}

export default Account;
