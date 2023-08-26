import React from 'react'

const Jsexample = () => {
    let name = "MCA React";
    let n1=50,
        n2=20;
        const Findgreater = () => {
            if(n1>n2){
                return "n1";
            }
            else{
                return "n2";
            }
        }
  return (
    <div>
        <h2>JSX Example</h2>
        <h3>Welcome to React By {name}</h3>
        <h3>Greater Name is {n1>n2?"n1":"n2"}</h3>
        <h3>Greater Name is {Findgreater()}</h3>
    </div>
  )
}

export default Jsexample