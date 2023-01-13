import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
    const navigate = useNavigate()
    const handleCreateUser = () =>{
        navigate("/create-user")
    }
    const handleBlog = () =>{
        navigate("/blog")
    }
    return (
        <>
            <main>
                <Grid mt={15} container alignItems="center" flexDirection="column">
                    <Box sx={{ width: 500 }}>
                        <Typography align="center" variant="h3" sx={{color: "#123456"}}>
                            Album Layout
                        </Typography>
                        <Typography
                            align="center"
                            variant="h5"
                            mt={2}
                            sx={{ color: "#646464" }}>
                            Something short and leading about the collection
                            below—its contents, the creator, etc. Make it short
                            and sweet, but not too short so folks don't simply
                            skip over it entirely.
                        </Typography>
                    </Box>
                    <Grid spacing={2} container justifyContent="center" mt={3}>
                        <Grid item>
                            <Button variant="contained" onClick={handleBlog}>Read More</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" onClick={handleCreateUser}>Create User</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </>
    );
};

export default Homepage;
