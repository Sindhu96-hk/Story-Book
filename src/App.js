import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import ResponsivePlayer from './components/video/ResponsivePlayer';
import Work from './components/pages/HomePage/Work';
import Build from './components/pages/HomePage/Build';
import Testimonial from './components/pages/HomePage/Testimonial';
import Test from './components/pages/HomePage/Test';
import Spottest from './components/pages/HomePage/Spottest';
import Testimonial1 from './components/pages/HomePage/Testimonial1';
import Document from './components/pages/HomePage/Document';
import Feedback from './components/pages/HomePage/Feedback';
import Testimonial2 from './components/pages/HomePage/Testimonial2';
import Install from './components/pages/HomePage/Install';
import Tutorial from './components/pages/HomePage/Tutorial';
import Footer from './components/pages/Footer/Footer';



function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />   
        </Switch>
        <Route path='/' exact component={ResponsivePlayer} />
          <Route path='/' exact component={Work} />
          <Route path='/' exact component={Build} />
          <Route path='/' exact component={Testimonial} />
          <Route path='/' exact component={Test} />
          <Route path='/' exact component={Spottest} />
          <Route path='/' exact component={Testimonial1} />
          <Route path='/' exact component={Document} />
          <Route path='/' exact component={Feedback} />
          <Route path='/' exact component={Testimonial2} />
          <Route path='/' exact component={Install} />
          <Route path='/' exact component={Tutorial} />
       
        <Switch>
          <Route path='/' exact component={Footer} />
        </Switch>
       
    </Router>
  );
}

export default App;
