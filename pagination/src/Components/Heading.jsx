import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const Heading = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container alignItems='center' justifyContent="space-between">
                            <Grid marginLeft={8}>
                                <Typography
                                    component={Link}
                                    to="/"
                                    variant="h6"
                                    sx={{ flexGrow: 1 }}>
                                    BlogPedia
                                </Typography>
                            </Grid>
                            <Grid marginRight={20}>
                                <Typography
                                    color="inherit"
                                    component={Link}
                                    to="/"
                                    sx={{ cursor: "pointer" , transition: 'all .5s','&:hover':{color: 'black'}}}>
                                    Home
                                </Typography>
                                <Typography
                                    color="inherit"
                                    component={Link}
                                    to="/blog"
                                    sx={{ cursor: "pointer", marginLeft: '20px', transition: 'all .5s', '&:hover':{color: 'black'} }}>
                                    Blog
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Heading;
