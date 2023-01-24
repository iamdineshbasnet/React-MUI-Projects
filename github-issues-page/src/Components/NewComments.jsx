import React, { useState, useEffect } from "react";
import axios from "axios";
import * as DOMPurify from 'dompurify'
import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
const NewComments = () => {
    const [newComments, setNewComments] = useState([]);
    const [extractedData, setExtractedData] = useState([]);
    const [markDown, setMarkDown] = useState({
        markItems: ''
    });
    const {markItems} = markDown
    
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

    const TOKEN = "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";
    const config = {
        headers: { Authorization: `Bearer ${TOKEN}` },
    };
    const postComments = () => {
        extractedData.map((markdownItem) => {
            axios
                .post(
                    `https://api.github.com/markdown`,
                    {
                        text: markdownItem.body,
                    },
                    config
                )
                .then((res) => setMarkDown({...markDown, markItems: res}))
                .catch((error) => console.log(error, "error"));
        });
    };
    useEffect(() => {
        postComments();
    }, [extractedData]);
    const dataArray = Object.entries(markItems);
    console.log(markItems, 'markItems')
    console.log(dataArray, ' dataAray')
    return (
        <>
            <Grid mt={10}>
                {dataArray.map(([key, value], index) => (
                    <Typography sx={{ color: "white" }} key={index}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(value.data),
                            }}></div>
                    </Typography>
                ))}
            </Grid>
        </>
    );
};

export default NewComments;
