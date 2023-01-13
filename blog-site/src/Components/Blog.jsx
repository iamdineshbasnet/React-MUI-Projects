import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import Loader from "./Loader";
const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [rowPerPage, setRowPerPage] = useState(3)
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const getPosts = () => {
        setIsLoading(true)
        axios("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts").then(
            ({ data }) => {
                setIsLoading(false)
                setPosts(data);
            }
        );
    };

    useEffect(() => {
        getPosts();
    }, []);

    const handlePage = (event, newPage)=>{
        setPage(newPage)
    }
    return (
        <>
        {isLoading 
        ? <Loader/>
        : <Grid
        mt={15}
        container
        sx={{ width: "75%", marginLeft: "10%" }}
        justifyContent="center">
        {posts.slice(page*rowPerPage - rowPerPage, rowPerPage * page).map((post) => {
            return (
                <Card
                    sx={{
                        maxWidth: 345,
                        marginLeft: "20px",
                        marginBottom: "40px",
                    }}
                    key={post.id}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe">
                                {post.post_name[0]}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={post.post_name}
                        subheader={post.createdAt}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={post.post_image}
                        alt={post.post_name}
                    />
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="text.secondary">
                            This impressive paella is a perfect party
                            dish and a fun meal to cook together with
                            your guests. Add 1 cup of frozen peas along
                            with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            );
        })}
    </Grid>}
            

            <Grid container justifyContent="center" sx={{margin: '20px 0'}}>
                <Pagination count={Math.ceil(posts.length/rowPerPage)} color="primary"  onChange={handlePage}/>
            </Grid>
        </>
    );
};

export default Blog;
