// src/pages/BlogPage.ts
import React, {useState, useEffect} from 'react';
import {getBlog, getFeatures} from "../services/api";
import * as Mui from '@mui/material';

import '../assets/styles/test.css';


const BlogPage = () => {
    const [blogData, setBlogData] = useState<any>(null)
    const [featureData, setFeatureData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const responseData = await getBlog(1); // Assuming ID is 1
                setBlogData(responseData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();

        const fetchFeatures = async () => {
            try {
                const data = await getFeatures(1);
                setFeatureData(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchFeatures()

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

    return (
        <div className="page">
            <div className="container">
                <Mui.Typography variant="h1" component="h2">
                    Blog Name: {blogData.topic}
                </Mui.Typography>

                <p>Rates: {blogData.rates}</p>
                <p>Created: {blogData.created}</p>
                <p>Author: {blogData.author_name}</p>

                {showDetails && (
                    <div className="details-container">
                        <Mui.List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <Mui.ListSubheader component="div" id="nested-list-subheader">
                                    Nested List Items
                                </Mui.ListSubheader>
                            }
                        >
                            {featureData.map((feature: any) => (
                                <Mui.ListItemText key={feature.pk}>
                                    {feature.feature_type_name}
                                    <Mui.ListItemText primary={feature.content} />
                                </Mui.ListItemText>
                            ))}
                        </Mui.List>
                    </div>
                )}

                <div className="button-container">
                    <Mui.Button variant="contained" onClick={handleButtonClick}>
                        {showDetails ? 'Hide Details' : 'Show Details'}
                    </Mui.Button>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;
