import React, {useState,useEffect} from 'react';
function Form (){
  let [toDo, changeState] = useState('')
function createToDo(){
  changeState(toDo)
}
  return(
      <section>
        <form >
          <input
            value={name}
            placeholder="Add A Todo"
            value = {toDo} 
            onChange={e => createToDo(e.target.value)}/>
          <button onSubmit = {e =>{addToDo(toDo)}} >Add Todo</button>
        </form>
      </section>
  )
}
export default Form