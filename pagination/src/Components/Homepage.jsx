import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Grid, Button } from "@mui/material";
const Homepage = () => {
    return (
        <>
        <Box position='relative'>
            <Box
                position="relative"
                sx={{
                    background: "linear-gradient(135deg, #3648fb, #54c3bf)",
                    width: "100%",
                    height: "92.5vh",
                }}>
                <Grid position="absolute" top="20%" left="10%">
                    <Box
                        sx={{
                            background: "white",
                            width: "40%",
                            padding: "10px",
                            borderRadius: "25px 25px 25px 0",
                        }}>
                        <Typography
                            align="center"
                            variant="h6"
                            sx={{ fontSize: "14px", fontWeight: "600" }}>
                            Welcome To!
                        </Typography>
                    </Box>
                    <Box mt={1}>
                        <Typography variant="h3" align="left" sx={{fontSize: '70px'}}>
                            Blog Pedia
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Button component={Link} to="/blog" variant="outlined" sx={{color: 'black', borderColor: 'black',transition: 'all 1s', '&:hover':{borderColor: 'white', color: 'white'}}}>Explore</Button>
                    </Box>
                </Grid>
            </Box>
            <Box position="absolute" top='10%' right='0' sx={{width: 950, height: 200}}>
                <img src="https://imgs.search.brave.com/YuqBgvKyazqbygYSKOa9dbkzCY-K1Z7ZPaPmQGl52sE/rs:fit:1200:1200:1/g:ce/aHR0cDovL21vY2t1/cGRhZGR5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvZWRkLzIw/MTkvMDYvTWFjLUJv/b2stUHJvLTNELU1v/ZGVsLUZyZWUtRG93/bmxvYWQucG5n" alt="" />
            </Box>

        </Box>
        </>
    );
};

export default Homepage;
