//This component for counter app with colour 
import React from 'react'

const Counter = (props) => {
    const {counts,id}=props.counters;
    //const [count,setCount]=useState(counts);
   
  return (
    <div className="my-3 row">
        <button className="btn btn-primary col-2" onClick={()=>props.onDecrement(props.counters)}>Decrement</button>
        <span className={counts<=0?"btn btn-danger mx-2 col-1":"btn btn-warning mx-2 col-1"}>{counts===0?"zero":counts}</span>
        <button className="btn btn-primary col-2" onClick={()=>props.onIncrement(props.counters)}>Increment</button>
        <button className="btn btn-danger mx-2 col-1" onClick={()=>props.onDelete(id)}>Delete</button> 
    </div>
  )
}

export default Counter