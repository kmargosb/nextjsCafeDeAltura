import React from 'react'
import Link  from 'next/link';

const Button = ({text,styles,linkTo}) => {
  
  return (
    
      <Link href={linkTo}> <button className={styles}>{text}</button> </Link>
   
  )
}

export default Button