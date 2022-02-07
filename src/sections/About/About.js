import React from "react";
import { useTheme, Grid, Typography, makeStyles, Box, useMediaQuery } from "@material-ui/core";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <SectionContainer id="about" title="About" maxWidth="md">
            <Grid container spacing={0} alignItems="center" style={{ width: "100%" }}>
                {isMobile && (
                    <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
                        <Box mb={6}>
                            <Avatar />
                        </Box>
                    </Grid>
                )}
                <Grid
                    item
                    xs={12}
                    md={7}
                    className={classes.gridItemWrapper}
                    style={{ flexDirection: "column", alignItems: "space-around" }}
                >
                    <Box mb={4}>
                        <Typography variant="body1"> Dynamic and motivated professional with a desire to pursue my goals and contribute to a corporate environment. Constantly building relationships to further my objectives and knowledgebase among much more.
        Excellent in coaching individuals to success while Skilled in building cross-functional teams, demonstrating exceptional communication
        skills, and making critical decisions during challenges. Adaptable and transformational leader with an ability to work independently and/or with a team to bring projects from concept to completetion. creating effective presentations, and
        developing opportunities that further establish organizational goals.</Typography>
                    </Box>
                    <Skills />
                </Grid>
                {!isMobile && (
                    <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
                        <Avatar />
                    </Grid>
                )}
            </Grid>
        </SectionContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    gridItemWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default About;
