"use-strict";
const personInfo = {
  name: "Dilshod", // data-type:string
  lastName: "Abdirazzoqov", // data-type:string
  age: 21, // data-type:number
  wishes: [], // data-type:array7
  language: function () {}, //data-type:function
  friend: {
    name: "John",
    lastName: "Doe",
    age: 22,
    isMarried: true,
    skills: {
      webskill: true, // data-type:boolean
      artificialIntel: true,
    },
  },
};

const obj = {
  name: "div", // name: "div" --> property:value;
  width: 400,
  height: 400,
  colors: {
    border: "crimson",
    bg: "coral",
  },
};

console.log(obj);

// delete property.value
//delete obj.name;
//console.log(obj);
let counter = 0;
for (let key in obj) {
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(`Property: ${key} value: ${obj[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Property: ${key} value: ${obj[key]}`);
    counter++;
  }
}
console.log(counter);

const object = {
  name: "div", // name: "div" --> property:value;
  width: 400,
  height: 400,
  colors: {
    border: "crimson",
    bg: "coral",
  },
};

// Professional way to get the length of any objects in js
console.log(Object.keys(object).length);

// delete property:value
//delete obj.name;
//console.log(obj);
let count = 0;
for (let key in object) {
  count++;
}
console.log(count);

// how to set up new method-start
const newMethod = {
  makeExample: function () {
    console.log("Your first method here");
  },
};
newMethod.makeExample();
// how to set up new method-end

const options = {
  colors: {
    bg: "crimson",
    border: "coral",
  },
};
//it is the old way to get value of objects
// console.log(options["colors"]["bg"]);

const { bg, colors } = options.colors; // alternative way -> const bg = options["colors"]["bg"];

console.log(bg);
