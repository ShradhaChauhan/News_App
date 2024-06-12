import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

export default class App extends Component {
  pageSize = 9;
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
      <div>
        <BrowserRouter basename='/News_App'>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#e30e5c' 
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/News_App' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} headline="General" category="general" country="in"/>}/>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} headline="Business" category="business" country="in"/>}/>
            <Route exact path='/science'element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} headline="Science" category="science" country="in"/>}/>
            <Route exact path='/technology'element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} headline="Technology" category="technology" country="in"/>}/>
            <Route exact path='/health'element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} headline="Health" category="health" country="in"/>}/>
            <Route exact path='/sports'element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} headline="Sports" category="sports" country="in"/>}/>
            <Route exact path='/entertainment'element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} headline="Entertainment" category="entertainment" country="in"/>}/>
            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
