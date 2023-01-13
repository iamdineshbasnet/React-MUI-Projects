import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "./Pagination.jsx";
const Blog = () => {
    // State to store fetched data
    const [posts, setPosts] = useState([]);
    // setting up loading animation
    const [load, setLoad] = useState(false);
    // No. of data showing per page i.e. 3
    const [showPerPage, setShowPerPage] = useState(3);
    const [page, setPage] = useState({
        start: 0, 
        end: showPerPage, 
    });
    const getBlogPosts = () => {
        setLoad(true); 
        fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts")
            .then((res) => res.json())
            .then((data) => {
                setLoad(false) 
                setPosts(data)
            });
    };
    // rendering post for the first time
    useEffect(() => {
        getBlogPosts();
    }, []);
    
    const onPageChange = (start, end) => {
        setPage({ start: start, end: end });
    };
    return (
        <>
 
            <Grid container justifyContent="center" mt={4}>
                {load? (<CircularProgress/>) : <>
                {posts.slice(page.start, page.end).map((post) => {
                    return (
                        <Card
                            sx={{ maxWidth: 345, margin: "10px 30px" }}
                            key={post.id}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={post.post_image}
                                title={post.post_name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    {post.post_name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    );
                })}
                </>}
                
                <Pagination
                    showPerPage={showPerPage}
                    onPageChange={onPageChange}
                    total={posts.length}
                />
            </Grid>
        </>
    );
};

export default Blog;
