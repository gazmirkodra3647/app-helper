/* 
   Filename: sophisticated_app.js
   Content: A sophisticated and complex application to manage users and their tasks. 
*/

// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTasks() {
    return this.tasks;
  }
}

// Task class
class Task {
  constructor(id, title, description, createdBy) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = new Date();
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}

// User management module
const UserManagement = (function () {
  const users = [];

  function registerUser(name, email, password) {
    const user = new User(name, email, password);
    users.push(user);
    return user;
  }

  function loginUser(email, password) {
    const user = users.find((user) => user.email === email && user.password === password);
    return user ? user : null;
  }

  return {
    registerUser,
    loginUser,
  };
})();

// Task management module
const TaskManagement = (function () {
  const tasks = [];
  let taskId = 1;

  function createTask(user, title, description) {
    const task = new Task(taskId++, title, description, user);
    user.addTask(task);
    tasks.push(task);
    return task;
  }

  function deleteTask(user, taskId) {
    const task = user.getTasks().find((task) => task.id === taskId);
    if (task) {
      user.deleteTask(taskId);
      tasks.splice(tasks.indexOf(task), 1);
    }
  }

  return {
    createTask,
    deleteTask,
  };
})();

// Sample usage
const user1 = UserManagement.registerUser("John Doe", "johndoe@example.com", "password123");
const user2 = UserManagement.registerUser("Jane Smith", "janesmith@example.com", "abc123");

const task1 = TaskManagement.createTask(user1, "Complete project", "Finish all pending tasks");
const task2 = TaskManagement.createTask(user1, "Prepare presentation", "Create slides and practice");

console.log(user1.name); // Output: John Doe
console.log(user1.getTasks()); // Output: [Task, Task]

TaskManagement.deleteTask(user1, task1.id);
console.log(user1.getTasks()); // Output: [Task]

const loggedInUser = UserManagement.loginUser("johndoe@example.com", "password123");

console.log(loggedInUser); // Output: User object

// ...more code and functionality