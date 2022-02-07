import React, { useContext, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import loaderContext from "../../contexts/loaderContext";
import Profile  from "../../components/Profile"

const Home = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();



    useEffect(() => {
        if (!isLoading) {
            controls.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.1 + 1.2 },
            }));
        } else {
            controls.start({ opacity: 0, y: 5 });
        }
    }, [isLoading, controls]);

    return (
        <HomeContainer id="home" >
                <Profile />
                <motion.div animate={controls} custom={5}>
                    <Button
                        className={classes.button}
                        component={Link}
                        spy
                        smooth
                        offset={0}
                        duration={500}
                        to="contact"
                        variant="outlined"
                        color="primary"
                        size="large"
    >
                        Contact Me
                    </Button>
                </motion.div>
        </HomeContainer>

    );
};

const useStyles = makeStyles((theme) => ({
    HomeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        float: "right",
    },
    subTitle: {
        marginBottom: "16px",
        fontSize: "75px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        },
    button: {
        right: "30px"
    }
    },
}));

export default Home;
