import React from 'react'
import { GrandChild } from './GrandChild'

export const Child = (props) => {
  return (
    <div>Child
     <h2>  {props.text} 
        {props.date}

        <GrandChild details={props.details}/>
     </h2>

    </div>
 
     
)
}
