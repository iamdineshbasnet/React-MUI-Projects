import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useEffect } from "react";
const Pagination = ({ showPerPage, onPageChange, total }) => {
    const [counter, setCounter] = useState(1);

    // update blog page only after counter value updates
    useEffect(() => {
        const value = showPerPage * counter; 
        onPageChange(value - showPerPage, value); // (start, end) value
    }, [counter]);

    const onButtonClick = (type) => {
        // when user click previous button
        if (type === "prev") {
            // set counter value to 1 if previous button is clicked when its value is 1
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1); // if counter value is > 1, decrease counter value by 1
            }
        } 
        // when user click next button
        else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    };
    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={2}
                mb={3}
                mt={3}>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => onButtonClick("prev")}>
                        Previous
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        {counter} of {Math.ceil(total / showPerPage)}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => onButtonClick("next")}>
                        Next
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Pagination;
