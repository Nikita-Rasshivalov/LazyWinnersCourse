import React from "react";
import { ArrowBigLeft } from "lucide-react";
import "./VideoDiscriptionLarge.css";

export const VideoDiscriptionLarge = () => {
  return (
    <div className="video-dsc-lagre--screen">
      <div className="dsc-arrow">
        <ArrowBigLeft color= {"#f0b90b"}  size={150} strokeWidth={1.5} />
      </div>
      <span className="dsc-text">
        Фрагмент одного из видеороликов
        <span style={{ color: "#f0b90b" }}> курса</span>
      </span>
    </div>
  );
};
