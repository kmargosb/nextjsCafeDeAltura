import React from 'react'
import Link  from 'next/link';

const Button = ({text,styles,linkTo,onClick}) => {
  
  return (
    
      <button onClick={onClick} className={styles}> {text} </button>
   
  )
}

export default Button