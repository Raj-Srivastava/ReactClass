import React from 'react'

const Listing = () => {
    let Lang =["Dot.Net","React","Next JS","Java","Python"];
    let LangObj=[
        {id:"1",lang:"Dot.Net"},
        {id:"2",lang:"React"},
        {id:"3",lang:"Next JS"},
        {id:"4",lang:"Java"},
        {id:"5",lang:"Python"},
    ];
  return (
    <div>
        <h2>List of Languages:</h2>
        <ul>
            {Lang.map((lang,index)=>(
            <li style={{textAlign:"left"}} key={index}>{lang}</li>))}
        </ul>
        <h2>List of Array Object:</h2>
        <ul>
            {LangObj.map((obj)=>(
                <li style={{textAlign:"left"}} key={obj.id}>{obj.lang}</li>
            ))}
        </ul>
    </div>
  )
}

export default Listing