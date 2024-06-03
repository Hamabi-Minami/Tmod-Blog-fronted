import React, {useState, useEffect} from 'react';
import {Avatar, Button, Rating, Typography} from "@mui/material";

const UserPanel = () => {

    return(
        <div>

        </div>
    )
}

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
            <Button color="inherit" component="a"
                    href="https://github.com/Hamabi-Minami?tab=repositories"
                    target="_blank" sx={{width: '200px', display: 'block', margin: '0,0,0,0'}}>
                GitHub
            </Button>
            <h2>{create_time}</h2>
            <Typography component="legend">Rating</Typography>
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

