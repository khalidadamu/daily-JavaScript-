// TODO: declaring classes

class Person {
  constructor(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
  }
}

const person = new Person();
console.log(person);
