import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewComments from "./NewComments";
const Comments = () => {
    const { issueNumber } = useParams();
    const [comments, setComments] = useState([]);
    const getComments = async () => {
        await axios
            .get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}`
            )
            .then((res) => setComments(res));
    };
    useEffect(() => {
        getComments();
    }, []);
    
    return (
        <>
            <NewComments comments={comments.data} />
        </>
    );
};

export default Comments;
