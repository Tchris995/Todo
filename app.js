
let javday = new Date().toDateString();
document.getElementById('date').innerHTML = javday;


 let on =false;

  const elem = document.getElementById("todoButton")
   function addTodoForm() {
    elem.addEventListener('click',()=> {
     
      if(!on){
        on = true
      let div = document.createElement('div');
      div.setAttribute('class', 'container mt-3');
      let innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'row');
      let innerDiv2 = document.createElement('div');
      innerDiv2.setAttribute('class', 'col-10');
      // innerDiv2.style.gridRow = 'span 5';

      let innerDiv3 = document.createElement('form');
      innerDiv3.setAttribute('class', 'form');
      let innerDiv4 = document.createElement('input');
      innerDiv4.setAttribute('type', 'text');
      innerDiv4.setAttribute('class', 'form-control pt-4');
      innerDiv4.setAttribute('placeholder', 'Add your todo');
      innerDiv4.setAttribute('id', 'todo');
      innerDiv4.setAttribute('autocomplete',"off");
      innerDiv4.setAttribute('spellcheck', "false");  // Disable spellcheck
      innerDiv4.setAttribute('autocorrect', "off")
      let innerDiv5 = document.createElement('button');
      innerDiv5.setAttribute('type', 'button');
      innerDiv5.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
      innerDiv5.setAttribute('class', 'btn btn-danger ms-2');
      // innerDiv5.style.display='inlineBlock'
      let innerSaveButton = document.createElement('button');
      innerSaveButton.setAttribute('class', 'btn btn-success ms-2');
      innerSaveButton.innerText='Save Todo';



      
     saveToStorage(innerSaveButton,innerDiv4);
    
      
      
      

      
      
      
      
      

      
      


      innerDiv3.appendChild(innerSaveButton);
      innerDiv3.appendChild(innerDiv5);
      innerDiv3.appendChild(innerDiv4);
      innerDiv2.appendChild(innerDiv3);
      innerDiv.appendChild(innerDiv2);
      div.appendChild(innerDiv);
      document.body.appendChild(div);

      removeTodoItem(innerDiv5,div);
      }
      
      
   }
    )
  
 }
 addTodoForm();

 function removeTodoItem(item,itemdiv) {
  item.addEventListener('click',()=>{
    itemdiv.remove();
    on = false
  })
 }

 function saveToStorage(saveButton,theDiv) {
  saveButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let todoitems = theDiv.value.trim();
    
    if(todoitems){
    let logger = JSON.parse(localStorage.getItem('todo'))||[];
    logger.push(todoitems)

    localStorage.setItem('todo',JSON.stringify(logger))
    
    console.log(logger);
    saveToDisplayDiv(todoitems)
    theDiv.value = '';
    
  }else{console.log('storage empty');
  }
    });
  
 }

function loadTodos() {
  let todos = JSON.parse(localStorage.getItem('todo'))||[];
  todos.forEach(todo=>saveToDisplayDiv(todo))
}


function saveToDisplayDiv(divText) {
  // let userText = theDiv.value.trim()
  let house =document.querySelector('.dynamic')
  let house1 = document.createElement('div')
  house1.setAttribute('class','row')
  let house2 = document.createElement('div')
  house2.setAttribute('class','col-4')
  
  // house.style.backgroundColor='yellow'
  house.appendChild(house1);
  house1.appendChild(house2);
  house2.innerHTML=`<h3>${divText}</h3>`

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
  deleteButton.setAttribute('class', 'btn btn-danger ms-2');

  
 
  house2.appendChild(deleteButton);
  
  
  


  deleteButton.addEventListener('click',()=>{
    delFromLocal(divText)
    house1.remove()

  })
}

function delFromLocal(delb) {
  let todos = JSON.parse(localStorage.getItem('todo'))||[];
  let updatedTodo = todos.filter((todo)=>{
   return todo !== delb.trim()
  })
    localStorage.setItem('todo', JSON.stringify(updatedTodo));
  }

  window.onload = loadTodos;

console.log(document.querySelector('.dynamic'));
 