import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
    const navigate = useNavigate()
    const [userData, setUserData]=useState({
        firstname: '',
        lastname: ''
    })
    const handleSubmit = () => {
        postData();
    };
    const {firstname, lastname} = userData
    const handlefirstName = ({target: {value}}) =>{
        setUserData({...userData, firstname: value})
    }
    const handlelastName = ({target: {value}}) =>{
        setUserData({...userData, lastname: value})
    }
    const postData = () => {
        axios.post("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users", {
            firstname,
            lastname,
        }).then((data)=> navigate("/user-list"));
    };
    return (
        <>
            <Grid container justifyContent="center">
                <Grid
                    mt={15}
                    container
                    flexDirection="column"
                    alignItems="center"
                    sx={{ maxWidth: 200 }}>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        size="small"
                        onChange={handlefirstName}
                        value={firstname}
                        sx={{ marginBottom: "20px" }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        size="small"
                        onChange={handlelastName}
                        value={lastname}
                        sx={{ marginBottom: "20px" }}
                    />
                    <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default CreateUser;
