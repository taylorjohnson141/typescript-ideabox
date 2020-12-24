import * as React from 'react';
import Form from './Form'
import FormList from './FormList'
const result : string[] = [];
export const ideaContexts = React.createContext( result);


function Ideas(props:any) {
  const [state, dispatch] = React.useState([])
  return (
    <ideaContexts.Provider value={state}>
     <Form/>
     <FormList/>
    </ideaContexts.Provider>
  )
}
export default Ideas