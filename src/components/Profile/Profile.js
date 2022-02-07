import React from "react";
import { makeStyles } from "@material-ui/core";
import ProfileImg from "../../assets/images/profile1.png";

const Profile = () => {
  const classes = useStyles();
  return (
      <img src={ProfileImg} alt="Brian Turner" className={classes.ProfileImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  ProfileImg: {
    width:"600px",
    height:"600px",
    objectFit:'cover',
    padding: "20px",
    // boxShadow:theme.shadows[10]
  },
}));

export default Profile;
