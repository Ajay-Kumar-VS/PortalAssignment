// import React from "react";
import { createPortal } from "react-dom";
import "./Portal.css";
import { useRef } from "react";
// import { findSourceMap } from "module";
const Portal = ({onClose}) => {
    // let ponrtalref=useRef(null)
    
  // let ref
  function exitPortal() {
    onClose()
    // console.log(document.getElementsByClassName("modal"));
    // console.log("first")
    // document.getElementsByClassName("portal-container")[0].remove();
    // window.close()/
  }
//   setref(ponrtalref)
  return createPortal(
    <div className="portal-container"  onClick={exitPortal}>
      <div className="portal">
        <p>This is part of the portal</p>
        <button id="button" onClick={exitPortal}>
          exit
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Portal;
