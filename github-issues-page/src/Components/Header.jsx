import React from "react";
import { styled } from "@mui/material/styles";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    AppBar,
    Box,
    Grid,
    Toolbar,
    InputBase,
    Typography,
    Select,
    Avatar,
    FormControl,
    InputLabel,
} from "@mui/material";
const Header = () => {
    
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        backgroundColor: "none",
        "&:hover": {
            backgroundColor: "none",
        },
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        paddingLeft: 10,
        backgroundColor: "transparent",
        border: "1px solid #FFF",
        borderRadius: "5px",
        marginLeft: "10px",
    }));


    return (
        <>
            <AppBar sx={{ background: "#2f3640", boxShadow: "none", position: 'relative' }}>
                <Toolbar >
                    <Grid container alignItems="center">
                        <Box>
                            <Grid container alignItems="center">
                                <GitHubIcon
                                    sx={{ fontSize: 40, marginLeft: 5 }}
                                />
                                <Search>
                                    <StyledInputBase
                                        placeholder="Search or jump to..."
                                        inputProps={{ "aria-label": "search" }}
                                    />
                                </Search>
                            </Grid>
                        </Box>
                        <Box sx={{ marginLeft: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography>Pull requests</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Issues</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Codespaces</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Marketplace</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Explore</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{ width: "300px" }}
                            spacing={2}>
                            <Grid item>
                                <NotificationsNoneIcon />
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel htmlFor="my-select">
                                        <AddIcon sx={{color: '#FFF'}}/>
                                    </InputLabel>
                                    <Select size="small" id="my-select" sx={{width: '70px'}}>
                                        <option value={10}>
                                            New repository
                                        </option>
                                        <option value={20}>
                                            Import repository
                                        </option>
                                        <option value={30}>
                                            New codespace
                                        </option>
                                        <option value={30}>New gist</option>
                                        <option value={30}>
                                            New organization
                                        </option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <InputLabel htmlFor="profile">
                                        <Avatar sx={{width: '30px', height: '30px'}}/>
                                    </InputLabel>
                                    <Select size="small" id="profile" sx={{width: '70px', border: 'none'}}></Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
