import React from "react";
import { Maximize } from "lucide-react";

export const FullScreenButton = ({toggleFullScreen}) => {
  return (
    <>
      <button onClick={toggleFullScreen} className="control-button">
        <Maximize size={20} />
      </button>
    </>
  );
};
