const inputTask = document.querySelector("#input-box")
const addButton = document.querySelector("#addBtn")
const listTask = document.querySelector("#list-container")

addButton.addEventListener("click", () =>{

const newElement = inputTask.value.trim()

if (newElement){

const newList = document.createElement("li")
newList.textContent = newElement
listTask.appendChild(newList)

const removeBtn = document.createElement("button")
removeBtn.textContent = "❌"
newList.appendChild(removeBtn)
removeBtn.classList.add("delete-btn");

removeBtn.style.padding ="10px"

removeBtn.addEventListener("click", () =>{
listTask.removeChild(newList)


})
 inputTask.value = "";

}




})