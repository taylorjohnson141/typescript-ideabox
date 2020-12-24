import * as React from 'react';
import {ideaContexts} from './Ideas'

function Form (props:any){
  const value = React.useContext(ideaContexts);
  let [toDo, changeState] = React.useState('')
  let createToDo =(todo:string)=>{
    changeState(todo)
  }
  let addToDo = (e:any,todo:string) =>{
    e.preventDefault()
    console.log(todo)
    value.push(todo)
    console.log(value)
  }
  return(
      <section>
        <form >
          <input
            placeholder="Add A Todo"
            value = {toDo} 
            onChange={e => createToDo(e.target.value)}/>
          <button onClick = {e =>{addToDo(e,toDo)}} >Add Todo</button>
        </form>
      </section>
  )
}
export default Form