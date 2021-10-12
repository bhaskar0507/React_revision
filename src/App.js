import "./App.css";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [newName, setNewName] = useState("Bhaskar");
  const [newBatch, setNewBatch] = useState("Ninja2");
  const [newOrg, setNewOrg] = useState("Masai School");

  const [btnName, setBtnName] = useState("change to anu")

  const handleChange = () => {
    if( newName ==="Bhaskar"){
      setNewName("Anurag Yadav");
      setNewBatch("B tech C.S");
      setNewOrg("MIET");
      setBtnName("Change to bhaskar")
    }
    else if(newName==="Anurag Yadav"){
    setNewName("Bhaskar");
    setNewBatch("Ninja2");
    setNewOrg("Masai School");
    setBtnName("Change to anu")
    }
  };

  return (
    <div className="App">
      <Details name={newName} batch={newBatch} organisation={newOrg} />
      <button onClick={handleChange}>{btnName}</button>
    </div>
  );
}

export default App;
