const todoInput = document.getElementById("todoInput"); // saving different elements using dom into a variable, so we can use it further in the code
const todoList = document.getElementById("todoList");


 function addTask(){    // function that will add task when we will click on add button
  const todoWork = todoInput.value;  // saving the input value , in a variable
   
  if(todoWork !== ""){   // if the input is not null ,
    const newTask = document.createElement("li") // all the input will become a list, and saving all that value in a variable
    newTask.style.marginTop = '20px'
    newTask.style.padding ='10px 25px'
    newTask.style.border = '1px solid'
    newTask.style.borderRadius ='10px'
    newTask.style.background = 'white'
    newTask.style.fontSize = '25px'
    newTask.innerText = todoWork;    // represents the rendered text content 

    const doneButton = document.createElement("button"); // creating a done button using dom element
    doneButton.innerHTML = "&#x2705";  // button's image (tick)
    doneButton.style.margin ='0px 85px'
    doneButton.style.fontSize = '25px'
    doneButton.style.cursor = 'pointer'
    doneButton.classList.add("donebtn");  // .add is use to add class , here donebtn is a class
    doneButton.addEventListener("click", function() {  // adding functionality to the button
    newTask.classList.toggle("taskdone"); // taskdone is 
    newTask.style.backgroundColor = 'green'
    deleteButton.remove()
  })

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML ="❌";
    deleteButton.style.fontSize='22px'
    deleteButton.style.cursor = 'pointer'
    deleteButton.addEventListener("click" , function(){
      todoList.removeChild(newTask);
    })

    todoList.appendChild(newTask) // appendchild is used to show all this dom on the page
    newTask.appendChild(doneButton);
    newTask.appendChild(deleteButton);
    todoInput.value = "" // after adding , the input box will become empty
    localStorage.setItem('todoList', JSON.stringify(todoList.innerHTML));   //localStorage.setItem(key, value)  , 'todoList' is the key under which the data will be stored in localStorage.
    //  JSON.stringify() static method converts a JavaScript value to a JSON string
  } else {
    alert("input invalid");
  }
}
window.onload = function() {    //window.onload is an event that triggers when the page has finished loading.
  const storedTasks = localStorage.getItem('todoList');   // localStorage.getItem(key) retrieves the value stored in localStorage under the specified key ('todoList' in this case).
  if (storedTasks) {
      todoList.innerHTML = JSON.parse(storedTasks);  //JSON.parse() converts a JSON string to an equivalent JavaScript object. 
  }
};
