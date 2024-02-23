// import React from "react";
import { createPortal } from "react-dom";
import "./Portal.css";

const Portal = ({ closePortal }) => {
  function exitPortal(e) {
    e.preventDefault();

    //checking that not clicked on portal ,it will work only if clicked outside of portal div
    if (e.target.className !== "portal") {
      closePortal();
    }
  }
  // returning  a portal
  return createPortal(
    <div
      className="portal-container"
      onClick={(e) => {
        exitPortal(e);
      }}>
      <div className="portal">
        <p>This is part of the portal</p>
        <button id="button-exit" onClick={exitPortal}>
          exit
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Portal;
