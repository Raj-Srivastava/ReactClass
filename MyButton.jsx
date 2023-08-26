import React from 'react'

const MyButton = (props) => {
  return (
    <div>
        <button class="btn btn-outline-danger" onClick={props.onPress}>Click Me</button>
    </div>
  )
}

export default MyButton