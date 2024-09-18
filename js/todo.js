// const items = [
//   { number: 1, description: "Item one description", action: "start process" },
//   {
//     number: 2,
//     description: "Item two description",
//     action: "continue process",
//   },
//   { number: 3, description: "Item three description", action: "pause process" },
//   { number: 4, description: "Item four description", action: "stop process" },
//   {
//     number: 5,
//     description: "Item five description",
//     action: "restart process",
//   },
//   { number: 6, description: "Item six description", action: "check status" },
//   { number: 7, description: "Item seven description", action: "submit form" },
//   { number: 8, description: "Item eight description", action: "reset values" },
//   { number: 9, description: "Item nine description", action: "clear cache" },
//   { number: 10, description: "Item ten description", action: "fetch data" },
//   {
//     number: 11,
//     description: "Item eleven description",
//     action: "validate input",
//   },
//   {
//     number: 12,
//     description: "Item twelve description",
//     action: "delete record",
//   },
//   {
//     number: 13,
//     description: "Item thirteen description",
//     action: "update record",
//   },
//   {
//     number: 14,
//     description: "Item fourteen description",
//     action: "send notification",
//   },
//   {
//     number: 15,
//     description: "Item fifteen description",
//     action: "generate report",
//   },
// ];

// const inputField = document.getElementById("input-value");
// const tbody = document.getElementById("content-container");
// const tr = document.createElement("tr");

// document.getElementById("task-btn").addEventListener("click", function () {
  
//   // const getValue = inputField.value;
// //   console.log(getValue);

//   // const getRandom = Math.floor(Math.random()*items.length);
//   // let getLists = items[getRandom];
//   // console.log(getLists)

//   const {number, description, action} = getLists;
//   // get list
//     tr.innerHTML =
//     `
//       <th>${number}</th>
//       <td>${description}</td>
//       <td>${action}</td>
//     `;
//     // console.log(item);

//   tbody.appendChild(tr);

// });

// //get list triggering inputField
// inputField.addEventListener('click', function(){
//   for(const item of items){
//     inputField.value = item; 
//     console.log(item);
//   }
// })





const div = document.getElementById("content-container");


// do enable add task button
const taskBtn = document.getElementById("task-btn");
let remainingTask = 0;

function deleteTask(){
  // this.remove();
  console.log(this) 
}
function addTaskList(value) {
  remainingTask++;
  const newRow = `
       <tr onclick="deleteTask()">
                <th>${remainingTask}</th>
                <td>${value}</td>
             <td> <button> Delete </button> </td>
              </tr> 
  `
  div.innerHTML += newRow;
}

// console.log(taskBtn.getAttribute('disabled'));
document.getElementById("task-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-value");
  const getValue = inputField.value;
  addTaskList(getValue);
  inputField.value = "";
});



const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  div.innerHTML = "";
});
