import React, {useState, useEffect} from 'react';
import {Avatar, Rating, Typography} from "@mui/material";


interface UserInfoCompProps {
    user_name: string;
    avtar: string;
    create_time: string;
    rating: number;
}

const UserInfoComp: React.FC<UserInfoCompProps> = ({user_name, avtar, create_time, rating}) => {

    const [value, setValue] = React.useState<number | null>(2);

    return (
        <div>
            <h2>{user_name}</h2>
            <Avatar alt="Remy Sharp" src={avtar}/>
            <h2>{create_time}</h2>
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}

export default UserInfoComp;

