import { useEffect } from "react";

export const useScrollLock = (isOpen) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.paddingRight = isOpen ? `${scrollbarWidth}px` : "0px";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);
};
