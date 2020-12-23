import React, {useState,useEffect} from 'react';
function Form (){
  let [name:string, changeState] = useState('')

  return(
      <section>
        <form onSubmit={submitForm}>
          <input
            value={name}
            placeholder="Add A Todo"
            onChange={e => createToDo(e.target.value)} />
          <button>Add Todo</button>
        </form>
      </section>
  )
}
export default Form