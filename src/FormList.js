import * as React from 'react';
import {ideaContexts} from './Ideas'
function FormList(){
  const value = React.useContext(ideaContexts);
let toDos =value.map(val =>{
  <toDo/>
})
return (
  <section>
    {toDos}
  </section>
)
}