import React from "react";
import { Grid, TextField, Button} from "@mui/material";
const CreateUser = () => {
    return (
        <>
            <Grid container justifyContent="center">
                <Grid
                    mt={15}
                    container
                    flexDirection="column"
                    alignItems="center"
                    sx={{ maxWidth: 200 }} >
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        size="small"
                        sx={{ marginBottom: "20px" }}
                    />
                    <Button variant="contained" sx={{ width: "100%" }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default CreateUser;
