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
import Doc from './components/Doc';
import Tutorials from './components/Tutorials';
import Releases from './components/Releases';
import Addons from './components/Addons';
import Blog from './components/Blog';
import Community from './components/Community';



function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact >
            <>   
              <Home></Home>
              <ResponsivePlayer></ResponsivePlayer>
              <Work></Work>
              <Build></Build>
              <Testimonial></Testimonial>
              <Test></Test>
              <Spottest></Spottest>
              <Testimonial1></Testimonial1>
              <Document></Document>
              <Feedback></Feedback>
              <Testimonial2></Testimonial2>
              <Install></Install>
              <Tutorial></Tutorial>
            </>
          </Route>     
          <Route path='/Doc' exact component={Doc} />    
          <Route path='/Tutorials' exact component={Tutorials} /> 
          <Route path='/Releases' exact component={Releases} />
          <Route path='/Addons' exact component={Addons} />
          <Route path='/Blog' exact component={Blog} /> 
          <Route path='/Community' exact component={Community} />   
          <Route path='/' exact component={Footer} />
        </Switch>
       
    </Router>
  );
}

export default App;
