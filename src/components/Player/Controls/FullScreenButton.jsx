import React, { useRef, useEffect } from "react";
import { Maximize } from "lucide-react";

export const FullScreenButton = ({toggleFullScreen}) => {

  const buttonRef = useRef(null); 

  useEffect(() => {
    const button = buttonRef.current;

    const handleClick = () => {
      toggleFullScreen(); 
    };

    if (button) {
      button.addEventListener("click", handleClick);
      button.addEventListener("touchstart", handleClick);
    }
    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
        button.removeEventListener("touchstart", handleClick);
      }
    };
  }, [toggleFullScreen]); 


  return (
    <>
      <button  ref={buttonRef} className="control-button">
        <Maximize size={20} />
      </button>
    </>
  );
};
