//Problem 1
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((num) => num % 2 === 0);


//Problem 2
const reverseString = (str: string): string => str.split("").reverse().join("");


//Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): "String" | "Number" => {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
};


//Problem 4
const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] =>
  object[key];


//Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface ReadBook extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): ReadBook => ({
  ...book,
  isRead: true,
});


//Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails = (): string =>
    `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
}


//Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] =>
  arr1.filter((item) => arr2.includes(item));
