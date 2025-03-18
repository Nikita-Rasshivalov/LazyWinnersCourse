import React from "react";
import {ArrowBigDown } from "lucide-react";
import "./VideoDiscriptionSmall.css";

export const VideoDiscriptionSmall = () => {
  return (
    <div className="video-dsc--small-screen">
       <span className="dsc-text">
        Фрагмент одного из видеороликов
        <span style={{ color: "#f0b90b" }}> курса</span>
      </span>
      <div className="dsc-arrow">
        <ArrowBigDown color= {"#f0b90b"}  size={60} strokeWidth={1.5} />
      </div>
    </div>
  );
};
