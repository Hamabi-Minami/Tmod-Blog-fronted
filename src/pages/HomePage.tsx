import React, {useState, useEffect} from 'react';
import {getBlogs} from "../services/api";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary, Avatar,
    Box,
    Button, Container,
    CssBaseline,
    Grid
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {deepOrange} from "@mui/material/colors";


const HomePage = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<any>(null)

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
    },[])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{bgcolor: '#cfe8fc', height: '10vh'}}>
                    header
                </Box>

                <div>
                    {
                        blogs.map((blog: any) => (
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    {blog.topic}
                                    {/*<Avatar sx={{ bgcolor: deepOrange[500], marginLeft:1}}>W</Avatar>*/}
                                    <br/>
                                    {blog.created}
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
            </Container>
        </React.Fragment>


    );
};

export default HomePage