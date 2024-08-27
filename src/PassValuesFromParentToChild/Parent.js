import React from 'react'
import { Child } from './Child'
import { renderToPipeableStream } from 'react-dom/server'

export const Parent = (props) => {
  return (
    <div>Parent
   <h1> Name  {props.author.name} </h1>
  <Child text= {props.text} date = {props.date} details = {props.author.details}/>
    </div>
  )
}
