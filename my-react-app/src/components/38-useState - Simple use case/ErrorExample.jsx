import React from 'react'

export default function Setup() {
  let title = "Changed title";
  const handleClick = () => {
    console.log(title);
  }
  return (
    <div className='container'>
      <h2>Random title</h2>
      <button type='button' onClick={handleClick} className='btn'>Change title</button>
    </div>
  )
}
