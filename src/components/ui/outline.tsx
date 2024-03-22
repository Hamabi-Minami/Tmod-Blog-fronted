import React, {useState, useEffect} from 'react';
import {
    Avatar,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Rating,
    Typography
} from "@mui/material";
import * as Mui from "@mui/material";
import {StarBorder} from "@mui/icons-material";
import MinimizeIcon from '@mui/icons-material/Minimize';


interface OutLineCompProps {
    topic: string;
    features: [];
}

const OutLineComp: React.FC<OutLineCompProps> = ({topic, features}) => {

    const [value, setValue] = React.useState<number | null>(2);
    const [open, setOpen] = React.useState(true);
    let currentMainTitle = 1;
    let currentSubTitleNumber = 0;

    return (
        <div>
            <h2>OutLine</h2>
            <h3>{topic}</h3>
            <Mui.List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //     <Mui.ListSubheader component="div" id="nested-list-subheader">
                //         {topic}
                //     </Mui.ListSubheader>
                // }
            >
                {
                   features && features.map((feature: any, index) => {
                            if (index === 0) {
                                currentMainTitle = 0;
                                currentSubTitleNumber = 1
                                return null;
                            }
                            if (feature.feature_type_name == "SubTitle") {

                                currentMainTitle++;
                                currentSubTitleNumber = 1
                                return (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={`${currentMainTitle}.${currentSubTitleNumber}:${feature.feature_type_name}`}/>
                                    </ListItem>
                                );

                            } else {
                                currentSubTitleNumber++;
                                return (

                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{pl: 4}}>
                                                <ListItemIcon>
                                                    <MinimizeIcon/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={`${currentMainTitle}.${currentSubTitleNumber}:${feature.feature_type_name}`}/>
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                );
                            }
                        }
                    )
                }
            </Mui.List>
        </div>
    )
}

export default OutLineComp;



