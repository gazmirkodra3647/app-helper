Filename: complex_program.js

/* Description: This code is a complex program that simulates a virtual world with interactive objects and users. It includes functions for creating and manipulating objects, user interactions, and displaying the world. */

// Constants
const WORLD_WIDTH = 100; // Width of the virtual world
const WORLD_HEIGHT = 50; // Height of the virtual world

// Object Class
class VirtualObject {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  move(deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
  }

  draw() {
    console.log(`Drawing object at (${this.x}, ${this.y}) with width ${this.width}, height ${this.height}, and color ${this.color}`);
  }
}

// User Class
class User {
  constructor(name) {
    this.name = name;
  }

  interactWith(object) {
    console.log(`${this.name} is interacting with object at (${object.x}, ${object.y})`);
  }
}

// Virtual World
const virtualWorld = {
  objects: [],
  users: [],

  addObject(object) {
    this.objects.push(object);
  },

  addUser(user) {
    this.users.push(user);
  },

  display() {
    console.log(`Virtual World: ${this.objects.length} objects, ${this.users.length} users`);
    console.log(`World size: ${WORLD_WIDTH} x ${WORLD_HEIGHT}`);

    this.objects.forEach(obj => {
      obj.draw();
    });

    this.users.forEach(user => {
      console.log(`User: ${user.name}`);
    });
  }
};

// Create objects
const obj1 = new VirtualObject(10, 10, 20, 20, "red");
const obj2 = new VirtualObject(30, 20, 10, 30, "blue");
virtualWorld.addObject(obj1);
virtualWorld.addObject(obj2);

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");
virtualWorld.addUser(user1);
virtualWorld.addUser(user2);

// Move objects
obj1.move(5, 5);
obj2.move(2, -3);

// Interact users with objects
user1.interactWith(obj1);
user2.interactWith(obj2);

// Display virtual world
virtualWorld.display();