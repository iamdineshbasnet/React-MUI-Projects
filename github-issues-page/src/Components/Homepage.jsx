import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { Grid, Typography, Box, FormControl, InputLabel } from "@mui/material";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
const Homepage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Grid mt={20} sx={{ padding: "0 8em" }}>
                <Box
                    sx={{
                        border: "1px solid #FFF4",
                        borderRadius: "5px",
                    }}>
                    <Box sx={{ padding: "1em", background: "#FFF1" }}>
                        <Grid container justifyContent="space-between">
                            <Box>
                                <Grid container>
                                    <Box>
                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{ color: "#FFF" }}
                                            spacing={1}>
                                            <Grid item>
                                                <AlbumOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ fontSize: "1rem" }}>
                                                    903 Open
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ marginLeft: "1em" }}>
                                        <Grid
                                            container
                                            alignItems="center"
                                            sx={{
                                                color: "#FFF",
                                                marginLef: "1em",
                                            }}
                                            spacing={1}>
                                            <Grid item>
                                                <CheckOutlinedIcon />
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ fontSize: "1rem" }}>
                                                    11083 Closed
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Box>
                            <Box>
                                <Grid container>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Author
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Label
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Projects
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Milestones
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Assignee
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <FormControl>
                                            <select
                                                name=""
                                                id=""
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: "#FFF8",
                                                    fontWeight: '400',
                                                    marginRight: '1.5em',
                                                    cursor: 'pointer'
                                                }}>
                                                <option value="" hidden>
                                                    Sort
                                                </option>
                                            </select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    status: unconfirmed
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    status: unconfirmed
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#ffb70099",
                                        color: "#FFFF00",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Component: Developer Tools
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    status: unconfirmed
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    status: unconfirmed
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#574d3399",
                                        color: "#baba69",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Component: DOM
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Component: server Rendering
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#62151599",
                                        color: "#dc6565",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Type: Bug
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#b9a12b33",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Resolution: Needs More Information
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Status: unconfirmed
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid #FFF4", padding: "1em" }}>
                        <Grid>
                            <Grid
                                sx={{ color: "#FFF" }}
                                container
                                alignItems="flex-start">
                                <AlbumOutlinedIcon
                                    sx={{
                                        marginRight: "5px",
                                        color: "#00FF0090",
                                    }}
                                />
                                <Typography>
                                    Bug: eslint-plugin-react-hooks does not
                                    support TypeScript "satisfies" operator
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#0003",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Component: server Rendering
                                </Typography>
                                <Typography
                                    sx={{
                                        marginLeft: "8px",
                                        background: "#62151599",
                                        color: "#dc6565",
                                        borderRadius: "20px",
                                        padding: "0 10px",
                                        border: "1px solid #FFF4",
                                    }}>
                                    Type: Bug
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    sx={{ marginLeft: "25px", color: "#FFF7" }}>
                                    #26004 opened 4 hours ago by Egor-Koldasov
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default Homepage;
