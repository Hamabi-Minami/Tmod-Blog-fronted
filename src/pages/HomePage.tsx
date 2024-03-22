import React, {useState, useEffect} from 'react';
import {getBlogs, getFeatures} from "../services/api";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary, Avatar,
    Box,
    Button, Container,
    CssBaseline,
    Grid, Paper, TextField
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {deepOrange} from "@mui/material/colors";
import {dateTrim} from "../utils/tools";
import UserInfoComp from "../components/ui/UserInfo";
import OutLineComp from "../components/ui/outline";
import SendIcon from '@mui/icons-material/Send';


const HomePage = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<any>(null)
    const [featureData, setFeatureData] = useState<any>(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const responseData = await getBlogs(); // Assuming ID is 1
                setBlogs(responseData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();

        const fetchFeatures = async () => {
            try {
                const data = await getFeatures(1);
                setFeatureData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        };

        fetchFeatures();

    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Grid container spacing={2} style={{height: '100px', margin: '1% 1% 1% 1%'}} alignItems="center">
                <Grid item xs={3}></Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Home
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Topics
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Followed
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="text">
                        Research
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" label="input" variant="standard" style={{marginBottom: '25px'}}/>

                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>

            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Paper style={{margin: '0 0 0 5%'}}>
                        <UserInfoComp avtar={''} create_time={'2024-03-20'} rating={5}
                                      user_name={'tmod-admin'}></UserInfoComp>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>

                        <div>
                            {
                                blogs && blogs.map((blog: any) => (
                                        <Accordion defaultExpanded>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon/>}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                            >
                                                {blog.topic}
                                                {/*<Avatar sx={{ bgcolor: deepOrange[500], marginLeft:1}}>W</Avatar>*/}
                                                <br/>
                                                {dateTrim(blog.created)}

                                            </AccordionSummary>

                                            <AccordionDetails>
                                                {blog.introduction}
                                            </AccordionDetails>
                                            <AccordionActions>
                                                <Button>enter</Button>
                                            </AccordionActions>
                                        </Accordion>
                                    )
                                )
                            }
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper style={{margin: '0 5% 0 0'}}>
                        <OutLineComp topic={featureData[0].feature_type_name} features={featureData}></OutLineComp>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage