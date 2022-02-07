import React from "react";
import { makeStyles, Drawer, List, Button, Divider, ListItem, Link as MuiLink } from "@material-ui/core";
import { Link } from "react-scroll";

const MobileMenu = ({ open, onClose, onOpen }) => {
    const classes = useStyles();
    const listItemProps = {
        button: true,
        component: Link,
        onClick: onClose,
        onKeyDown: onClose,
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        className: classes.listItem,
        activeClass: classes.active,
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose} classes={{ paper: classes.drawer }}>
            <div className={classes.list} role="presentation">
                <List className={classes.fullList}>
                    <ListItem {...listItemProps} to="about">
                        about
                    </ListItem>
                    <ListItem {...listItemProps} to="experience">
                        experience
                    </ListItem>
                    <ListItem {...listItemProps} to="projects">
                        projects
                    </ListItem>
                    <ListItem {...listItemProps} to="contact">
                        contact me
                    </ListItem>
                    <ListItem className={classes.btnContainer}>
                        <Button
                            component={MuiLink}
                            href="/resume.pdf"
                            variant="outlined"
                            color="primary"
                            underline="none"
                            >
                            resume
                        </Button>
                    </ListItem>
                    <ListItem className={classes.btnContainer}>
                    </ListItem>
                    <Divider />
                </List>
            </div>
        </Drawer>
    );
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        backgroundColor: theme.palette.background.default,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
        marginTop: theme.spacing(4),
    },
    listItem: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(2, 0),
        "&:hover": {
            backgroundColor: "rgb(80,80,80)",
        },
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(1),
    },
    active: {
        backgroundColor: theme.palette.primary.main,
    },
}));

export default MobileMenu;
