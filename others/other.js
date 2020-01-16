// example 1 iterating strings 

let greeting = "HellO there!"

greeting = greeting.toLocaleLowerCase()

let output = ""

for (let i = 0 ; i < greeting.length; i++) {
    if (i % 2 === 0) {
        output += greeting[i].toUpperCase()
    }   else {
        output += greeting[i]
    }
}

// example 2

greeting
    .split("")
    .map((letter, idx) => (idx % 2) ? letter.toLowerCase() : letter.toUpperCase())
    .join("")

// example 3

[10, 20, 30, 40, 50, 500, -999, 1000, 2000, -1]
    .filter((n, idx) => n >= 0)
    .map((n, idx) => n * Math.PI)

let students = [{
    name: "pedro",
    surname: "sanchez",
    salary: 20000
},
{
    name: "fran",
    surname: "naranjo",
    salary: 30000
},
{
    name: "quique",
    surname: "naranjo",
    salary: 40000
}]

students.map((student) => {
    student.salary -= 5000
    student.country = "ESP"
    return student
})