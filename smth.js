"user strict"
let C = 5;
let A = 15;

while (C < 101) {
    console.log(C);
    C++
    if (C == 101) {
        break;
    }
}

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
//ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
for(let item of array1) {
    if (item > 0 && item < 10) {
        console.log(item);
    }
}

for(let item of array1) {
    if (item == 5) {
        console.log("ye");
    }
}

let stuff = 0;

for (let item of array1) {
    stuff += item;
}
let result = stuff / array1.length

console.log(result);



let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  studentstatus: "active"
};

console.log(user.studentstatus);

if (user.age < 18 && user.studentstatus == "active") {
    console.log("hello");
} else if (user.firstname == "Levan") {
    console.log("hi levan");
} else if (user.studentstatus == "active" && user.age < 25) {
    console.log("Hello world");
} else {
    console.log(Error);
}

let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
];

for (let item of array) {
///?
}

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let item of array6) {
    if (item % 2 == 0) {
     console.log(item);   
    }
}
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]


for (let item of users) {
    if (item.status) {
        console.log(item);
    }
}