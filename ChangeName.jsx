import React,{useState} from 'react'
import MyButton from './MyButton';

const ChangeName = () => {
    const [name,setName]= useState("MCA");
    const Ch = () => {
        setName("Raj");
    }
  return (
    <div>
        <h2>Your Name is {name}</h2>
        <MyButton onPress={Ch}/>
    </div>
  )
}

export default ChangeName