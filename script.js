let students = [
    {id: 0, name: "Anita Maxwin", program: "Computer Science"},
    {id: 1, name: "Jane Smith", program: "Mathematics"},
    {id: 2, name: "Michael Johnson", program: "Physics"},
    {id: 3, name: "Emily Davis", program: "Chemistry"},
    {id: 4, name: "William Brown", program: "Biology"}
    
];

const createStudent = (name, program) => {
    
const article = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const button = document.createElement("button");

h2.innerHTML =name;
p.innerHTML = program;
button.innerHTML = "delete";

article.append(h2);
article.append(p);
article.append(button);
console.log(article);

article.classList.add("list-item");
return article;
}

const studentList = students.map((s) => {
    return createStudent(s.name, s.program)         

});

const listContainer = document.querySelector("#listContainer");
studentList.forEach((s) => {
    listContainer.append(s);
});
