import React from 'react'
import { useContext } from 'react';
import ColorContext from './ColorContext';
export const GrandChild2 = () => {

    const {appColor, name, updateColor} = useContext(ColorContext);
  return (
    <div>GrandChild2 Component

     <h2> Welcome {name} </h2>
        Color {appColor}

        <button onClick = {updateColor}> Update Color </button>

    </div>

  )
}
