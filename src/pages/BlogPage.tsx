import React, {useState, useEffect} from 'react';
import {getBlog, getFeatures} from "../services/api";
import * as Mui from '@mui/material';
import '../assets/styles/test.css';
import {useParams} from 'react-router-dom';
import LayoutComp from "../components/ui/layout";
import {Paper, Typography} from "@mui/material";
import CodeBlock from "../components/features/CodeBlock";



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
        fetchFeatures();

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

    function getLanguage (codes: any) {
        const match = codes.match(/#language=([\w-]+)/);
        return match ? match[1] : '';
    }

    // Function to render the appropriate element based on the item type
    const renderElement = (index: any, feature: any) => {
        switch (feature.feature_type_name) {
            case "Title":
                return <h1 key={index}>{feature.content}</h1>
            case "SubTitle":
                return <h2 key={index}>{feature.content}</h2>
            case "paragraph":
                return <p key={index}>{feature.content}</p>
            case "Image":
                return <img key={index} src={feature.content} alt={'img'}/>
            case "Code":
                return <CodeBlock key={index} language={getLanguage(feature.content)} codes={feature.content}/>
        }
    };

    const midContainer = () => {
        return (
            <div className="page" style={{ width: "100%", maxHeight:"90%",}}>
                <div className="container">
                    <Mui.Typography variant="h1" component="h2">
                        Blog Name: {blogData.topic}
                    </Mui.Typography>

                    <p>Created: {blogData.created}</p>
                    {/*<p>Rates: {blogData.rates}</p>*/}
                    {/*<p>Author: {blogData.author_name}</p>*/}

                    <div className="details-container" style={{maxHeight: "80%", overflow: "auto", scrollbarWidth: "none"}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <h1>Dynamic Elements</h1>
                            <div id="container">
                                {featureData && featureData.map((feature: any) => renderElement(feature.id,feature))}
                            </div>
                        </div>



                        {/*<Mui.List*/}
                        {/*    sx={{width: '100%', maxHeight: "100%", bgcolor: 'background.paper'}}*/}
                        {/*    component="nav"*/}
                        {/*    aria-labelledby="nested-list-subheader"*/}
                        {/*    subheader={*/}
                        {/*        <Mui.ListSubheader component="div" id="nested-list-subheader">*/}
                        {/*            Nested List Items*/}
                        {/*        </Mui.ListSubheader>*/}
                        {/*    }>*/}


                        {/*</Mui.List>*/}
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
