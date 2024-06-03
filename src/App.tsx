import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BlogPage from './pages/BlogPage';
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import FollowPage from "./pages/FollowPage";
import {AppBar, Button, Grid, Paper, Toolbar, Typography} from "@mui/material";
import UserInfoComp from "./components/ui/UserInfo";

function App() {
  return (
      <Router>
          <div>
              <AppBar position="static">
                  <Toolbar>
                      <Grid container spacing={2}>
                          <Grid item xs={3} style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                              <h2>wenhanliu's blog</h2>
                          </Grid>
                          <Grid item xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              <Button color="inherit" component={Link} to="/">Home</Button>
                              <Button color="inherit" component={Link} to="/topics">Topics</Button>
                              <Button color="inherit" component={Link} to="/follow">Followed</Button>
                          </Grid>
                          <Grid item xs={3}>

                          </Grid>
                      </Grid>
                      {/*<div style={{flexGrow: 1}}>*/}
                      {/*    <h2>wenhanliu's blog</h2>*/}
                      {/*    <Button color="inherit" component="a"*/}
                      {/*            href="https://github.com/Hamabi-Minami?tab=repositories"*/}
                      {/*            target="_blank" sx={{width: '200px', display: 'block', margin: '0,0,0,0'}}>*/}
                      {/*        GitHub*/}
                      {/*    </Button>*/}
                      {/*</div>*/}
                      {/*<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
                      {/*    <Button color="inherit" component={Link} to="/">Home</Button>*/}
                      {/*    <Button color="inherit" component={Link} to="/topics">Topics</Button>*/}
                      {/*    <Button color="inherit" component={Link} to="/follow">Followed</Button>*/}
                      {/*</div>*/}
                  </Toolbar>
              </AppBar>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/topics" element={<TopicsPage/>}/>
                  <Route path="/follow" element={<FollowPage/>}/>
                  <Route path="/blog/:pk" element={<BlogPage/>}/>
              </Routes>
          </div>

      </Router>
  );
}

export default App;
