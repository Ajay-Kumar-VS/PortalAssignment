
import "./App.css";
// import { createPortal } from 'react-dom';
import Portal from "./Portal";
import { useEffect, useState } from "react";


function App() {
  const [a,setA]=useState(false)
  // const [ref,setref]=useState(null)
  function openPortal(){
    setA(true)
    console.log(a)
  }
  
  // console.log(ref)
 
  return (
    <>
      <div>
        <button onClick={openPortal}>OpenPortal</button>
        {a&&<Portal onClose={() => setA(false)} />}
      </div>
      
    </>
  );
}

export default App;
