import "./App.css";

import Portal from "./Portal";
import { useState } from "react";

function App() {
  // state to monitor and set portal is visible or not
  const [isPortalVisible, setPortalVisible] = useState(false);
  
  //function to open /make portal visible by setting its state  true
  function openPortal() {
    setPortalVisible(true);
  }

  //function to close/make portal not visible by setting its state  false

  function closePortal() {
    setPortalVisible(false);
  }

  return (
    <>
      <div className="App-container">
        <button id="button-openPortal" onClick={openPortal}>
          OpenPortal
        </button>

        {/* if isPortalVisible is true only then rendering this portal*/}
        {isPortalVisible && <Portal closePortal={closePortal} />}
      </div>
    </>
  );
}

export default App;
