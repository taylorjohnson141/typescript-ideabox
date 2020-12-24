import * as React from 'react';
import {ideaContexts} from './Ideas'
import ToDo from './ToDo'
function FormList(){
  const value = React.useContext(ideaContexts);
let toDos = value.map((val:string) =>{
  console.log(val)
 return  <ToDo idea ={val}/>
})
return (
  <section>
    {toDos}
  </section>
)
}
export default FormList