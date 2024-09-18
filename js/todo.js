const tbody = document.getElementById("content-container");
const taskBtn = document.getElementById("task-btn");
const clearBtn = document.getElementById("clear-btn");

const inputField = document.getElementById("input-value");

// if something disappear inside the field then show disabled add task button
document.getElementById('input-value').addEventListener('keyup', function(){
  if (inputField.value === "") {
    taskBtn.disabled = true;
  } else {
    taskBtn.disabled = false;
  }
})

let count = 1;
taskBtn.addEventListener("click", function(){
  const inputText = inputField.value;
  inputField.value = '';
  taskBtn.disabled = true;
  // creating table row
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-sm";
  delBtn.addEventListener("click", function (){
    tr.remove();
  });

  th.append(count++);
  td1.append(inputText);
  td2.appendChild(delBtn);

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);

  tbody.appendChild(tr);

  // clear container when triggering clear all button
  clearBtn.addEventListener("click", function () {
    tbody.remove();
  });
});
