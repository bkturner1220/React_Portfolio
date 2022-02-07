import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import sigAnimation from "../assets/images/signature.json";

const Logos = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      speed: 0.1,
      animationData: sigAnimation,
    });
    return () => lottie.stop();
  }, []);
  return <div style={{ height: 500, width: 500 }} ref={anime}></div>;
};

export default Logos;