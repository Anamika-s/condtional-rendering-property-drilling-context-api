import React from 'react'
// // import { useContext } from 'react';
// import ColorContext from './ColorContext';
import { GrandChild1 } from './GrandChild1';
export const Child = () => {

    // const {appColor} = useContext(ColorContext);
  return (
    <div>Child Component

        {/* Color {appColor} */}
        <GrandChild1/>
    </div>

  )
}
