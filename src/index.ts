type Sex = "male" | "female";

interface Person {
    age: number;
    sex: Sex;
}

const ion: Person = {
    age: 13,
    sex: 'male'
}

console.log('hello ion', ion);