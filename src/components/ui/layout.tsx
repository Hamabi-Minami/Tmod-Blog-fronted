import React, {useState, useEffect, FunctionComponent} from "react";
import {Grid} from "@mui/material";

interface LayoutProps {
    left: React.ReactElement;
    mid: React.ReactElement;
    right: React.ReactElement;
    bottom: React.ReactElement;
}

const LayoutComp: React.FC<LayoutProps> = ({ left, mid, right, bottom}) => {
    return (
        <div>
            <Grid container spacing={2} style={{marginTop: "10px", marginBottom: "10px", }}>

                <Grid item xs={2} style={{height: "90vh"}}>
                    {left}
                </Grid>
                <Grid item xs={8} style={{height: "100vh"}}>
                    {mid}
                </Grid>
                <Grid item xs={2} style={{height: "90vh"}}>
                    {right}
                </Grid>
                <Grid item xs={12} style={{height: "10vh", marginTop: "-120px"}}>
                    {bottom}
                </Grid>
            </Grid>
        </div>
    )
}

export default LayoutComp;
