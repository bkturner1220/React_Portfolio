import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import sigAnimation from "../assets/images/signature.json";

const Signature = () => {
  const anime = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: sigAnimation,
    });
    return () => lottie.stop();
  }, []);
  return <div style={{ height: 1000, width: 1000 }} ref={anime}></div>;
};

export default Signature;