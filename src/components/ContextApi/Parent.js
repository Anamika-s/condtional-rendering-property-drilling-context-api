import React, { useState } from 'react'
import ColorContext from './ColorContext'
import { Child } from './Child';
export const Parent = () => {

const [color, setColor] = useState("red");
    const [name, setName] = useState("deepak");
  console.log("Color is " + {color});

  const updateColor = ()=>{
    setColor("green");
  }
  return (
    <div>Parent Component 
      <ColorContext.Provider value={{appColor:color, name:name, updateColor:updateColor}}>
            <Child/>
      </ColorContext.Provider>

    </div>
  )
}
