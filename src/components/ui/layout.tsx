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
            <Grid container spacing={2} style={{marginTop: "10px", marginBottom: "10px" ,background: "yellow"}}>

                <Grid item xs={3} style={{height: "90vh"}}>
                    {left}
                </Grid>
                <Grid item xs={6} style={{height: "90vh"}}>
                    {mid}
                </Grid>
                <Grid item xs={3} style={{height: "90vh"}}>
                    {right}
                </Grid>
                <Grid item xs={12} style={{height: "10vh"}}>
                    {bottom}
                </Grid>
            </Grid>
        </div>
    )
}

export default LayoutComp;
