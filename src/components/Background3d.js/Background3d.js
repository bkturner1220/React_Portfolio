import React, { useEffect, useContext, useRef } from "react";
import { useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../../contexts/loaderContext";
import { init } from "ityped";

const Background3d = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Developer", "Designer", "Content Creator"],
      });
    }, []);

    useEffect(() => {
        if (!isLoading) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                },
            });
        } else {
            controls.start({ opacity: 0, y: -50 });
        }
    }, [isLoading, controls]);

    return (
        <div className={classes.iframe}>
          <h1 className={classes.h1}>Brian Turner</h1>
          <h3 className={classes.h3}>
            Junior Full-Stack <span ref={textRef}></span>
          </h3>
   
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
    },
    iframe: {
        position: "absolute",
        paddingTop: "260px",
        top: 0,
        right: 0,
        width: "100%",
        maxWidth: "600px",
        color: "#FF0000",
    },
    wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
    },
    hideLogo: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "100px",
        height: "100px",
        backgroundColor: theme.palette.background.default,
    },
    h1: {
        fontSize: "70px",
    },
    h2: {
        fontSize: "55px",
    },
    h3: {
        fontSize: "40px",
    },
}));

export default Background3d;
