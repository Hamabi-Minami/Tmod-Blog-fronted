import React, {useState, useEffect} from 'react';
import {getBlog, getFeatures} from "../services/api";
import * as Mui from '@mui/material';
import '../assets/styles/test.css';
import {useParams} from 'react-router-dom';
import LayoutComp from "../components/ui/layout";
import {Paper, Typography} from "@mui/material";



const BlogPage = () => {
    const [blogData, setBlogData] = useState<any>(null)
    const [featureData, setFeatureData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(true);

    const {pk} = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const responseData = await getBlog(pk); // blog id
                setBlogData(responseData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchFeatures = async () => {
            try {
                setLoading(true);
                const data = await getFeatures(1);
                setFeatureData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
        fetchFeatures()

        return () => {

        };

    }, []);

    const handleButtonClick = () => {
        setShowDetails(!showDetails); // Toggle the showDetails state
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const leftContainer = () => {
        return (
            <div style={{background: "green", width: "100%", height: "100%", }}>
                left
            </div>
        )
    }

    const midContainer = () => {
        return (
            <div className="page" style={{background: "cyan", width: "100%", maxHeight:"50%",}}>
                <div className="container">
                    <Mui.Typography variant="h1" component="h2">
                        Blog Name: {blogData.topic}
                    </Mui.Typography>

                    <p>Created: {blogData.created}</p>
                    {/*<p>Rates: {blogData.rates}</p>*/}
                    {/*<p>Author: {blogData.author_name}</p>*/}

                    <div className="details-container" style={{maxHeight:"90%", overflow: "auto" }}>
                        <Mui.List
                            sx={{width: '100%', maxHeight:"100%", bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <Mui.ListSubheader component="div" id="nested-list-subheader">
                                    Nested List Items
                                </Mui.ListSubheader>
                            }>

                            {featureData && featureData.map((feature: any) => (
                                <Mui.ListItemText key={feature.pk}>
                                    {feature.feature_type_name}
                                    <Mui.ListItemText primary={feature.content}/>
                                </Mui.ListItemText>
                            ))}
                        </Mui.List>
                    </div>

                </div>
            </div>
        )
    }

    const rightContainer = () => {
        return (
            <div style={{background: "blue", width: "100%", height: "100%"}}>right</div>
        )
    }

    const bottomContainer = () => {
        return (
            <div style={{background: "pink", width: "100%", height: "100%" }}>bottom</div>
        )
    }

    return (
        <div>
            <LayoutComp left={ leftContainer()
            } mid={
                midContainer()
            } right={
                rightContainer()
            } bottom={
                bottomContainer()
            }
            />
        </div>
    );
};

export default BlogPage;

// <div className="page">
//     <div className="container">
//         <Mui.Typography variant="h1" component="h2">
//             Blog Name: {blogData.topic}
//         </Mui.Typography>
//
//         <p>Created: {blogData.created}</p>
//         {/*<p>Rates: {blogData.rates}</p>*/}
//         {/*<p>Author: {blogData.author_name}</p>*/}
//
//         {(
//             <div className="details-container">
//                 <Mui.List
//                     sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
//                     component="nav"
//                     aria-labelledby="nested-list-subheader"
//                     subheader={
//                         <Mui.ListSubheader component="div" id="nested-list-subheader">
//                             Nested List Items
//                         </Mui.ListSubheader>
//                     }>
//
//                     {featureData && featureData.map((feature: any) => (
//                         <Mui.ListItemText key={feature.pk}>
//                             {feature.feature_type_name}
//                             <Mui.ListItemText primary={feature.content}/>
//                         </Mui.ListItemText>
//                     ))}
//                 </Mui.List>
//             </div>
//         )}
//
//         {/*<div className="button-container">*/}
//         {/*    <Mui.Button variant="contained" onClick={handleButtonClick}>*/}
//         {/*        {showDetails ? 'Hide Details' : 'Show Details'}*/}
//         {/*    </Mui.Button>*/}
//         {/*</div>*/}
//
//     </div>
// </div>
