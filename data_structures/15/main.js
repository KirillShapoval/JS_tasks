function getLikes(people) {
  if (people.length === 0) {
    return "no one likes this";
  }
  else if (people.length === 1) {
    return people[0] + " likes this";
  }
  else if (people.length === 2) {
    return people[0] + " and " + people[1] + " like this";
  }
  else if (people.length === 3) {
    return people[0] + ", " + people[1] + " and " + people[2] + " like this";
  }
  else {
    return  people[0] + ", " + people[1] + " and " + (people.length - 2) + " others like this";
  }

  return people;
}

// let people = [];
// let people = ["Peter"];
// let people = ["Jacob", "Alex"];
// let people = ["Max", "John", "Mark"];
// let people = ["Alex", "Jacob", "Mark", "Max"];
let people = ["Alex", "Kerya", "Jacob", "Mark", "Max"];

let testPeople = getLikes(people);
console.log(testPeople);
