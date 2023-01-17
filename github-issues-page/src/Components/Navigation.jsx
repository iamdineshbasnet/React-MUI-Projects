import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
const Navigation = () => {
    return (
        <>
            <AppBar
                sx={{
                    background: "transparent",
                    marginTop: "5em",
                    boxShadow: "none",
                    borderBottom: "1px solid #FFF4",
                }}>
                <Toolbar>
                    <Grid
                        container
                        sx={{
                            height: "100%",
                            position: "absolute",
                            bottom: "-10px",
                        }}
                        alignItems="center">
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <CodeIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Code
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <AlbumOutlinedIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Issues
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <AccountTreeOutlinedIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Pull requests
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <PlayCircleOutlineIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Actions
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <DashboardOutlinedIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Projects
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <ImportContactsIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Wiki
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <GppMaybeIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Security
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                padding: "2px 15px",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "#0004",
                                    padding: "2px 15px",
                                    borderRadius: "4px",
                                },
                            }}>
                            <Grid container spacing={1} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <InsightsIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        Insights
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navigation;
