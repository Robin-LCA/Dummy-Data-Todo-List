// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
{
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

arrayOfTodos = [];

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

// Start with getting just the first item and its title property.
// Then capture the ol item into a variable(bucket) (getElementById)
// createElement to make a new LI
// createTextNode inside the li using the title property.
// Now append the text to the new li element
// Then append the element to the ol element.
// Put all of that inside your populateTodos function.

// ********************************************
// Now that you have one element created and showing up on the screen, put the same code inside a for loop and 
// iterate over the length of the array. 
// But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)


const populateTodos = () => {

   //these are the pieces I need to put the title in the ol
   let todoList = document.getElementById('todo-list')   
   
   //for loop

   for(let i=0; i < arrayOfTodos.length; i++) {

      let todoListItem = document.createElement('LI')                   
      let todoText = document.createTextNode(arrayOfTodos[i].title)  


      // build the string of code
      todoListItem.appendChild(todoText)  // put the text in the li      <li>Title</li>             
      todoList.appendChild(todoListItem)  // put the li in the ol        <ol id="todo-list"> <li>Title</li> </ol>    
   
   } // end for
   
} // end function

// Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
// Fetch the same data.
// Store the data in a variable.
// Add an input for the userID. This input should only take in a number from 1 - 10.
// Add a button that when clicked will:
// clear the previous todos from the view
// and populate it with only todos with the userID that matches the number inputted.
// then stores the currently filtered todos in a variable so that ...
// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed











const populateV2 = () => {

   let todoList2 = document.getElementById('todo-list');
   
   for (let i = 0; i < arrayOfTodos.length; i++) {

      let todoListItem = document.createElement('LI');
      
      todoListItem.innerHTML = `<h3>${arrayOfTodos[i].title}</h3> <p>${arrayOfTodos[i].completed}</p>`;
      
      todoList2.appendChild(todoListItem);
   }

}