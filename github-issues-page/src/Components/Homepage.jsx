import React from "react";
import { Grid, Typography, Box, FormControl, Tooltip } from "@mui/material";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Chip from "@mui/material/Chip";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import axios from "axios";
import { useEffect } from "react";
import TitleHover from "./TitleHover";
import ProfileHover from "./ProfileHover";
import { useNavigate } from "react-router-dom";
const Homepage = ({info, setInfo}) => {
    const navigate = useNavigate()
    const getIssues = () => {
        axios
            .get("https://api.github.com/repos/facebook/react/issues")
            .then(({ data }) => setInfo(data));
    };

    let timeAgo = "";

    useEffect(() => {
        getIssues();
    }, []);

    const handleCommentPage = (issueNumber) =>{
        navigate(`/issue/${issueNumber}`)
    }
    return (
        <>
            <Grid mt={10} sx={{ padding: "0 8em" }}>
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                                                    fontWeight: "400",
                                                    marginRight: "1.5em",
                                                    cursor: "pointer",
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
                    {info.map((item) => {
                        const currentDate = new Date().getTime() / 1000;
                        const createdDate =
                            new Date(item.created_at).getTime() / 1000;
                        const diffInSeconds = currentDate - createdDate;
                        // when time is less than a minute
                        if (diffInSeconds < 60) {
                            timeAgo = "Now";
                        }
                        // when time is less than an hour
                        else if (diffInSeconds < 3600) {
                            timeAgo = `${Math.floor(
                                diffInSeconds / 60
                            )} minutes ago`;
                        }
                        // when time is less than a day
                        else if (diffInSeconds < 86400) {
                            timeAgo = `${Math.floor(
                                diffInSeconds / 3600
                            )} hours ago`;
                        } else if (
                            diffInSeconds > 86400 &&
                            diffInSeconds <= 86400 * 2
                        ) {
                            // when time is between 1(exclusive) and 2(inclusive) days
                            timeAgo = `yesterday`;
                        } else {
                            // when time is greater than 2 days

                            // when time is less than a week (1week => 60 * 60 * 24 * 7 )
                            if (diffInSeconds < 604800) {
                                timeAgo = `${Math.floor(
                                    diffInSeconds / 86400
                                )} days ago`;
                            }
                            // when week is between 1 and 2
                            else if (
                                diffInSeconds > 604800 &&
                                diffInSeconds <= 604800 * 2
                            ) {
                                timeAgo = `last weeks`;
                            } else {
                                if (diffInSeconds < 604800 * 4) {
                                    timeAgo = `${Math.floor(
                                        Math.floor(diffInSeconds / (86400 * 7))
                                    )} weeks ago`;
                                } else if (
                                    diffInSeconds > 604800 * 4 &&
                                    diffInSeconds <= 604800 * 4 * 2
                                ) {
                                    timeAgo = `a month ago`;
                                } else {
                                    timeAgo = `last months`;
                                }
                            }
                        }

                        return (
                            <Box
                                sx={{
                                    borderTop: "1px solid #FFF4",
                                    padding: "1em",
                                }}
                                key={item.id}>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                    alignItems="flex-start">
                                    <Box>
                                        <Grid container>
                                            <Box>
                                                <AlbumOutlinedIcon
                                                    sx={{
                                                        marginRight: "5px",
                                                        color: "#00FF0090",
                                                    }}
                                                />
                                            </Box>
                                            <Box>
                                                <Grid
                                                    sx={{
                                                        color: "#FFF",
                                                        maxWidth: "900px",
                                                    }}
                                                    container
                                                    alignItems="">
                                                    <Tooltip
                                                        placement="top"
                                                        title={
                                                            <TitleHover
                                                                item={item}
                                                            />
                                                        }
                                                        arrow>
                                                        <Typography
                                                            onClick={()=>handleCommentPage(item.number)}
                                                            sx={{
                                                                cursor: "pointer",
                                                                "&:hover": {
                                                                    color: "cyan",
                                                                },
                                                            }}>
                                                            {item.title}
                                                        </Typography>
                                                    </Tooltip>

                                                    {item.labels.map((ele) => {
                                                        return (
                                                            <Tooltip
                                                                title={
                                                                    ele.description
                                                                }>
                                                                <Chip
                                                                    sx={{
                                                                        background: `#${ele.color}`,
                                                                        margin: "0 5px",
                                                                        cursor: "pointer",
                                                                    }}
                                                                    label={
                                                                        ele.name
                                                                    }
                                                                    variant="outlined"
                                                                    size="small"
                                                                />
                                                            </Tooltip>
                                                        );
                                                    })}
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid>
                                            <Grid
                                                sx={{
                                                    display: "flex",
                                                    alignItems: 'center',
                                                    marginTop: "5px",
                                                    marginLeft: "25px",
                                                    color: "#FFF7",
                                                }}>
                                                    <Typography sx={{marginRight: '4px'}}>{`#${item.number} opened ${timeAgo} by `}</Typography>

                                                    <Tooltip
                                                        title={
                                                            <ProfileHover
                                                                item={item}
                                                            />
                                                        }
                                                        placement="top"
                                                        arrow>
                                                        <Typography sx={{cursor: 'pointer', '&:hover':{color: 'cyan'}}}>
                                                            {item.user.login}
                                                        </Typography>
                                                    </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Grid
                                            onClick={()=>handleCommentPage(item.number)}
                                            container
                                            alignItems="center"
                                            sx={{ cursor: "pointer" }}>
                                            {item.comments < 1 ? (
                                                ""
                                            ) : (
                                                <>
                                                    <ChatBubbleOutlineOutlinedIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: "#FFF",
                                                            marginRight: "2px",
                                                        }}
                                                    />

                                                    <Typography
                                                        sx={{ color: "#FFF" }}>
                                                        {item.comments}
                                                    </Typography>
                                                </>
                                            )}
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Box>
                        );
                    })}
                </Box>
            </Grid>
        </>
    );
};

export default Homepage;
