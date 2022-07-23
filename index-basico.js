document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");


  function removeTodo(id) {
    console.log(id);
    document.getElementById(id).remove();
   
  }

  const addTodo = () => {
    if (title.value === "" || description.value === "") {
      alert.classList.remove("d-none");
      alert.innerText = "title and description is required";
      return;
    }
    alert.classList.add("d-none");

    const row = table.insertRow();
    row.setAttribute("id", key++);
    row.innerHTML = `
   <td>${title.value}</td>
   <td>${description.value}</td>
   <td class="text-center"><input type="checkbox"  ></td>
   <td class"text-right">
    <button class="btn btn-primary mb-1 ml-1">
        <i class="fa-solid fa-pen-to-square"></i>
    </button> 
    </td>
   `;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "mb-1");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash-can "></i>';
    removeBtn.onclick = function (e) {
      removeTodo( row.getAttribute("id"));
    };
    row.children[3].appendChild(removeBtn);
  };

  btn.onclick = addTodo;
});
