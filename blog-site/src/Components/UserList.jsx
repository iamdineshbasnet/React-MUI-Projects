import React, { useState } from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { Grid, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
const UserList = () => {
    const [user, setUser] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const [page, setPage] = useState(1);
    const [isLoadingUser, setIsLoadingUser] = useState(false);
    const getUserData = () => {
        setIsLoadingUser(true);
        const url = "https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users";
        axios(url)
            .then(({data}) => {
                setIsLoadingUser(false);
                setUser(data);
            });
    };

    useEffect(() => {
        getUserData();
    }, []);

    const handleUserPage = (event, newPage) => {
        setPage(newPage);
        console.log(page);
    };

  const handleRowsOnPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  
    return (
        <>
            {isLoadingUser ? (
                <Grid mt={10} container justifyContent="center">
                    <CircularProgress />
                </Grid>
            ) : (
                <TableContainer component={Paper} sx={{ marginTop: "90px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: 'bold'}}>S.N</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>First Name</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Last Name</TableCell>
                                <TableCell sx={{fontWeight: 'bold'}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user
                                .slice(
                                    page * rowsPerPage - rowsPerPage,
                                    rowsPerPage * page
                                )
                                .map((name, index) => (
                                    <TableRow
                                        key={name.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}>
                                        <TableCell>
                                            {index +
                                                1 +
                                                (page - 1) * rowsPerPage}
                                        </TableCell>
                                        <TableCell>{name.firstname}</TableCell>
                                        <TableCell>{name.lastname}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" sx={{marginRight: '5px'}} size='small' onClick={handleEdit}>Edit</Button>
                                            <Button variant="contained" size="small" onClick={handleDelete}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            <Grid container justifyContent="center" mt={5} alignItems="center" sx={{position: 'fixed', bottom: '190px'}}>
                <Pagination
                    count={Math.ceil(user.length / rowsPerPage)}
                    variant="outlined"
                    color="primary"
                    onChange={handleUserPage}
                />
                <FormControl variant="standard" sx={{ marginLeft: 5, minWidth: 100, }} size='small' >
                    <InputLabel>
                        user
                    </InputLabel>
                    <Select
                        
                        value={rowsPerPage}
                        onChange={handleRowsOnPage}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    );
};

export default UserList;
