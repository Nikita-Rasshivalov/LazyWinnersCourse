import { useEffect } from "react";

export const useScrollLock = (isLocked) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = isLocked ? "hidden" : "auto";
    document.body.style.paddingRight = isLocked ? `${scrollbarWidth}px` : "0px";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isLocked]);
};
