import React,{useEffect,useState} from 'react'

const ToggleUseEffect = () => {
    const [count,setCount]=useState(0);
    const[x,setX]=useState();
    const[y,setY]=useState();
    const increment = ()=>
    {
        setCount((prevCount)=>prevCount+1
        );
    }
    const increment5 = ()=>
    {
        increment();
        increment();
        increment();
        increment();
        increment();
    }
    const mouseMove=(event)=>
    {
        setX(event.clientX);
        setY(event.clientY);
        console.log("Inside MouseMove Function");
    }
    useEffect(()=>{
        console.log("Inside Effect");
        window.addEventListener("mousemove",mouseMove);
        return () =>
        {
            window.removeEventListener("mousemove",mouseMove);
        };
    }
    );
  return (
    <div className="m-3">
        <h2>X:{x} and Y:{y}</h2>
    </div>
  )
}

export default ToggleUseEffect