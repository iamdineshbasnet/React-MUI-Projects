import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./ProfileHover.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ProfileHover = (props) => {
    const [user, setUser] = useState("");
    const { item } = props;

    // console.log(item.user)
    const getUser = () => {
        axios
            .get(`https://api.github.com/users/${item.user.login}`)
            .then(({ data }) => setUser(data));
    };
    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <Box key={item.id}>
                <Grid
                    sx={{ minWidth: 250, marginTop: 2 }}
                    container
                    justifyContent="space-between"
                    alignItems="flex-start">
                    <Box>
                        <img src={user.avatar_url} alt={user.login} />
                    </Box>
                    <Box>
                        <button>Follow</button>
                    </Box>
                </Grid>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant="body1">{`${user.login}`}</Typography>
                    </Grid>
                    <Grid item>
                        {user.name === null ? (
                            ""
                        ) : (
                            <Typography variant="body2">{`${user.name}`}</Typography>
                        )}
                    </Grid>
                </Grid>
                <Grid>
                    {user.bio === "null" ? (
                        ""
                    ) : (
                        <Typography>{user.bio}</Typography>
                    )}
                </Grid>
                <Grid>
                    {(user.location === null) ? '' : <Grid container> <LocationOnIcon/> <Typography>{user.location}</Typography></Grid>}
                </Grid>
                <Grid>
                    {(user.email === null) ? '' : <Grid container> <EmailIcon/> <Typography>{user.email}</Typography></Grid>}
                </Grid>
            </Box>
        </>
    );
};

export default ProfileHover;
