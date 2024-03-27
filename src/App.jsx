import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

export default function App() {

  let [displayName,setDisplayName] = useState(false);
  let [fullname,setFullname] = useState("");
  
  let  name = useRef("");
  let lastName = useRef("");

  const handleFormSubmit = () => {
    setDisplayName(true);
    console.log(name.current.value);
    console.log(lastName.current.value);
    setFullname(`Full Name: ${name.current.value} ${lastName.current.value}`);
  }
  
  
  return (
    <main>
    <h1>Full Name Display</h1>
      <label>First Name: </label>
      <input type= "text" id="fname" name="fname" ref={name}/><br/>
      <label>Last Name: </label>
      <input type= "text" id="fname" name="fname" ref={lastName}/><br/>
      <input type='submit' onClick={handleFormSubmit}></input><br/>
      {displayName && <p>{fullname}</p>}
    </main>
  )
}
