const toDoForm = document.getElementById("todo-form")
const toDoInput=toDoForm.querySelector("input")
const toDoList=document.getElementById("todo-list")

const TODOS_KEY="todos"

let toDos=[]

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
   /*  JSON.stringify() localStorage에 array를 문자열로 저장
    localStorage의 key와 value는 모두 문자열이어야 한다. */

}

function deleteTodo(event){
    const li=event.target.parentElement
    li.remove()
    toDos=toDos.filter(todo=>todo.id!==parseInt(li.id))
    saveToDos()
   
}

function paintToDo(newTodoObj){
    const li=document.createElement("li")
    li.id=newTodoObj.id //li에 id 추가
    const span=document.createElement("span")
    span.innerText=newTodoObj.text
    const button = document.createElement("button")
    button.innerText="❌";
    button.addEventListener("click",deleteTodo)

    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)   
}
function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo=toDoInput.value
    toDoInput.value="";
    if(toDos.length<=13){
        const newTodoObj={
            text:newTodo,
            id:Date.now()
        }
        toDos.push(newTodoObj)
        paintToDo(newTodoObj)
        saveToDos()
    }
    else{
        alert("To much todo!")
    }
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos=localStorage.getItem(TODOS_KEY)
if (savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos) 
    //문자열이 된 배열을 다시 배열로
    toDos=parsedToDos
    parsedToDos.forEach(paintToDo);

}

//  array에서 삭제할 때는 지우고 싶은 item을 제외하고 
//  새 array를 만든다.->이때 filter 사용

// function myFilter(item){
    //반드시 true를 반환 만약 새 array에 각 item 포함되려면
//     return item!=3
// }

// [1,2,3,4].filter(myFilter)


