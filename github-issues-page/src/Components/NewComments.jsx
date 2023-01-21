import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
const NewComments = () => {
    const [newComments, setNewComments] = useState([]);
    const [extractedData, setExtractedData] = useState([]);
    const [markDown, setMarkDown] = useState([]);
    const { issueNumber } = useParams();
    useEffect(() => {
        axios
            .get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}/comments`
            )
            .then((res) => {
                setNewComments(res.data);
                const textData = res.data.map((comment) => {
                    return {
                        id: comment.id,
                        body: comment.body,
                    };
                });
                setExtractedData(textData);
            });
    }, []);

    const postComments = () => {
        const bodyArray = extractedData.map((eachBody)=> eachBody.body)
        console.log(bodyArray)
        axios
            .post(`https://api.github.com/markdown`, {
                text: bodyArray,
            })
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (extractedData.length) {
            postComments();
        }
    }, [extractedData]);

    return (
        <>
            {/* <Grid mt={10}>
                {extractedData.map((singleComment) => {
                    return (
                        <>
                            <Typography
                                sx={{ color: "white" }}
                                key={singleComment.id}>
                                {singleComment.body}
                            </Typography>
                        </>
                    );
                })}
            </Grid> */}
        </>
    );
};

export default NewComments;
