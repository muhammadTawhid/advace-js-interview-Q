const students = [
    {id: 21, name: "omor sannay"},
    {id: 31, name: "mannnnaaa"},
    {id: 41, name: "moyorei"},
    {id: 72, name: "deepjol"}
];

const allName = [];
for(let i = 0; i < students.length; i++){
    const elements = students[i];
    const {name} = elements; // using destructor
    allName.push(name);
    console.log(elements.name);
}
console.log("get name using fol looops", allName);

// get names using map method
const allNames = students.map(students => students.name);
const allId = students.map(s => s.id);
const bigger = students.filter(sBigId => sBigId.id > 40);
const biggerOne = students.find(sBigId => sBigId.id > 40);

console.log("students nme", allNames);
console.log("student id", allId);
console.log("student big id than 40", bigger);
console.log("student big id than 40", biggerOne);