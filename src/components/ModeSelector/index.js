import React from 'react'

import './modelSelector.css'

export default (props) => {
  const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
  const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}'
  const {onSelect} = props
  return (
    <div className='block-btn'>
      <button className='btn btn-primary' onClick={()=> onSelect(smallUrl)}>32 элемента</button>
      <button className='btn btn-success' onClick={()=> onSelect(bigUrl)}>1000 элементов</button>
    </div>
  )
}
