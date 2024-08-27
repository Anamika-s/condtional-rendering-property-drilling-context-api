import React from 'react'
import { useContext } from 'react';
import ColorContext from './ColorContext';
import { GrandChild2 } from './GrandChild2';
export const GrandChild1 = () => {

    const {appColor, name} = useContext(ColorContext);
  return (
    <div>GrandChild1 Component

        Color {appColor}
        <h1 style={{color:appColor}}> Hello {name} in  GrandChild1 </h1>
        <GrandChild2/>
    </div>

  )
}
