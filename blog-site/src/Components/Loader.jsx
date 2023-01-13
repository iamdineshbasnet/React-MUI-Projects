import React from "react";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Loader = () => {
    return (
        <>
        <Grid container justifyContent="center">
            <Grid mt={15}>
                <Grid container alignItems="center">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Grid sx={{ marginLeft: "10px" }}>
                        <Skeleton
                            variant="rectangular"
                            width={190}
                            height={10}
                            sx={{ marginBottom: "5px" }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={10}
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Skeleton
                        variant="rectangular"
                        width={300}
                        height={192}
                        sx={{ margin: "20px 0 0 0" }}
                    />
                </Grid>
                <Grid mt={2}>
                    <Skeleton variant="rounded" width={300} height={90} />
                </Grid>
                <Grid container alignItems="center" mt={2}>
                    <Skeleton variant="circular" width={40} height={40} sx={{marginRight: '10px'}}/>
                    <Skeleton variant="circular" width={40} height={40} />
                </Grid>
            </Grid>
            <Grid mt={15} sx={{marginLeft: '30px', marginRight: '30px'}}>
                <Grid container alignItems="center">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Grid sx={{ marginLeft: "10px" }}>
                        <Skeleton
                            variant="rectangular"
                            width={190}
                            height={10}
                            sx={{ marginBottom: "5px" }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={10}
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Skeleton
                        variant="rectangular"
                        width={300}
                        height={192}
                        sx={{ margin: "20px 0 0 0" }}
                    />
                </Grid>
                <Grid mt={2}>
                    <Skeleton variant="rounded" width={300} height={90} />
                </Grid>
                <Grid container alignItems="center" mt={2}>
                    <Skeleton variant="circular" width={40} height={40} sx={{marginRight: '10px'}}/>
                    <Skeleton variant="circular" width={40} height={40} />
                </Grid>
            </Grid>
            <Grid mt={15}>
                <Grid container alignItems="center">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Grid sx={{ marginLeft: "10px" }}>
                        <Skeleton
                            variant="rectangular"
                            width={190}
                            height={10}
                            sx={{ marginBottom: "5px" }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={10}
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Skeleton
                        variant="rectangular"
                        width={300}
                        height={192}
                        sx={{ margin: "20px 0 0 0" }}
                    />
                </Grid>
                <Grid mt={2}>
                    <Skeleton variant="rounded" width={300} height={90} />
                </Grid>
                <Grid container alignItems="center" mt={2}>
                    <Skeleton variant="circular" width={40} height={40} sx={{marginRight: '10px'}}/>
                    <Skeleton variant="circular" width={40} height={40} />
                </Grid>
            </Grid>

        </Grid>
        </>
    );
};

export default Loader;
