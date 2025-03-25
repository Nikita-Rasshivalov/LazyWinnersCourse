import React, { useRef, useEffect } from "react";
import { Maximize } from "lucide-react";

export const FullScreenButton = ({toggleFullScreen}) => {

  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleClick = () => {
      console.log("a")
      toggleFullScreen();
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
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
