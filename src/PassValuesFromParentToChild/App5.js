import React from 'react'
import { Parent } from './Parent';

export const App5 = () => {
var author = {"name":"Ajay" ,
        "details" :"some value"};
        
  return (
    <div>App5

        <Parent text="text1" date="12/12/2024" author={author}/>
    </div>
  )
}

// App5 > Parent > Child > GrandChild
