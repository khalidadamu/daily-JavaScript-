const messiDetils = {
  name: "messi",
  lastName: "Leo",
  age: 35,
  club: "Inter miami",
  country: "United States",
  skills: ["dribble", "passing", "vision"],

  getFullName: function () {
    return `${this.lastName} ${this.name} `;
  },

  getAge: function () {
    return `${this.age}`;
  },
};

messiDetils.isMarried = true;
messiDetils.hasChildren = true;
messiDetils.nationalities = "Argentina";

// console.log(messiDetils);
// console.log(messiDetils["name"]);

messiDetils.getSkills = function () {
  let skillsWithoutSkills = this.skills
    .splice(0, this.skills.length - 1)
    .join(",");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutSkills}, and ${lastSkill}`;
  let getFullName = this.getFullName();
  let statement = `${this.getFullName} is ${this.nationalities}. \n He lives 'in' the ${this.country} 'and' his man skillsets are ${this.skills}`;
  return statement;
};

console.log(messiDetils);
console.log(messiDetils.getSkills());

//TODO: Object Methods
//todo: There are 4 methods of manipulating an objects in javascript

//1. Object.assign,
//2. Object.keys,
//3. Object.values,
//4. Object.entries
//hasOwnProperty
