import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/profile1.png";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Brian Turner" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"370px",
    height:"370px",
    objectFit:'cover',
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
