import React from 'react'

const Message = (props) => {
    const {lang,lab}=props.info;    //This line is for destructuring
  return (
    <div>
        <h2>We are Reading {lang} in {lab}</h2>
    </div>
  )
}

export default Message