import React from "react";
import { Typography, Grid, Box, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AlbumIcon from "@mui/icons-material/Album";

const useStyles = makeStyles({
    container: {},
    link: {
        textDecoration: "underline",
        "&:hover": {
            color: "blue",
        },
    },
    typography: {
        fontWeight: 400,
        fontSize: "14px",
        color: "#FFF",
    },
});
const TitleHover = (props) => {
    const { item } = props;

    const style = useStyles();
    return (
        <>
            <Box className={style.container} key={item.id}>
                <Grid container>
                    <Typography variant="body2" className={style.typography}>
                        <span className={style.link}>facebook/react</span> on
                        Jan 18
                    </Typography>
                </Grid>
                <Grid
                    container
                    sx={{
                        margin: "5px 0",
                    }}>
                    <Box
                        sx={{
                            marginRight: "5px",
                        }}>
                        <AlbumIcon
                            fontSize="small"
                            sx={{
                                color: "#00FF0090",
                            }}
                        />
                    </Box>
                    <Box>
                        <Grid>
                            <Typography
                                className={
                                    style.typography
                                }>{`${item.title} #${item.number}`}
                                </Typography>
                            <Typography sx={{ color: "#FFF8" }}>
                                {item.body.substring(0, 50) + "..."}
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>

                {item.labels.map((ele) => {
                    return (
                        <Grid>
                            <Chip
                                variant="outlined"
                                label={ele.name}
                                size="small"
                                sx={{ background: `#${ele.color}` }}></Chip>
                        </Grid>
                    );
                })}
            </Box>
        </>
    );
};

export default TitleHover;
