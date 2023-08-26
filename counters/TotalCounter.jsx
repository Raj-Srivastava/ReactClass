import React,{useState} from 'react'
import Counter from './Counter';
import NavBar from './NavBar';

const TotalCounter = () => {
    const [counter,setCounter]=useState(
        [
            {id:1,counts:1},
            {id:2,counts:2},
            {id:3,counts:3},
            {id:4,counts:4},
        ]
    );
    const deleteCounter = (id) => {
        const lcounter=counter.filter((counters)=>counters.id !== id);
        setCounter(lcounter);
    };
    const findActiveCounter=()=>
    {
        return counter.filter((counters)=>counters.counts>0).length;
    }
    const decrement=(counters)=>
    {
       const lcounters=[...counter];
       const index=lcounters.indexOf(counters);
       if(lcounters[index].counts>0)
       {
        lcounters[index].counts--;
        setCounter(lcounters);
       }
    }
    const increment=(counters)=>
    {
        const lcounters=[...counter];
        const index=lcounters.indexOf(counters);
        lcounters[index].counts++;
        setCounter(lcounters);
    }
    const resetAll=()=>{
        setCounter(counter.map((counters)=>{
        counters.counts = 0;
        return counters;
        }));        
    }
    //useEffect(()=>{
      //  findActiveCounter();
    //},[counter]);
  return (
    <div className="m-3">
        <NavBar acounter={findActiveCounter()}/>
        <button className="btn btn-success" onClick={resetAll}>Reset ALL</button>
        {counter.map((counters)=>(
            <Counter key={counters.id} 
            counters={counters} 
            onIncrement={increment}
            onDecrement={decrement}
            onDelete={deleteCounter}/>
        ))}
    </div>
  )
}
export default TotalCounter