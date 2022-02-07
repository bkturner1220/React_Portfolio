import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import Logos from "../logos";

const Logo = () => {
    const classes = useStyles();
    return (
        <Link spy smooth duration={500} offset={-70} to="home" className={classes.root}>
            <Logos />
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
}));

export default Logo;
