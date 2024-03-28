import { useState } from "react";
import "./App.css";
import { useRef } from "react";

export default function App() {
  let [displayName, setDisplayName] = useState(false);
  let [fullname, setFullname] = useState("");

  let name = useRef("");
  let lastName = useRef("");

  const containpecialCharacter = (str) => {
    let regex = /[^a-zA-Z ]/g;
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  const handleFormSubmit = () => {
    setDisplayName(true);
    console.log(name.current.value);
    console.log(lastName.current.value);
      let nameT  = name.current.value;
    let lastNameT = lastName.current.value;
    if(nameT.trim()=="" || lastNameT.trim()=="" || containpecialCharacter(nameT) || containpecialCharacter(lastNameT)){
      return;
    }
    setFullname(`Full Name: ${name.current.value} ${lastName.current.value}`);
  };

  return (
    <main>
      <h1>Full Name Display</h1>
      <label>First Name: </label>
      <input type="text" id="fname" name="fname" ref={name} required/>
      <br />
      <label>Last Name: </label>
      <input type="text" id="fname" name="fname" ref={lastName} required/>
      <br />
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
      <br />
      {displayName && <p>{fullname}</p>}
    </main>
  );
}
