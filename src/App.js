import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import ResponsivePlayer from './components/video/ResponsivePlayer';
import Work from './components/Work/Work';
import Build from './components/Build/Build';
import Testimonial from './components/Testimonial/Testimonial';
import Test from './components/Test/Test';
import Spottest from './components/Spottest/Spottest';
import Testimonial1 from './components/Testimonial1/Testimonial1';
import Document from './components/Document/Document';
import Feedback from './components/Feedback/Feedback';
import Testimonial2 from './components/Testimonial2/Testimonial2';
import Install from './components/Install/Install';
import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/pages/Footer/Footer';
import Doc from './components/pages/Doc/Doc';
import Tutorials from './components/pages/Tutorials/Tutorials';
import Releases from './components/pages/Releases/Releases';
import Addons from './components/pages/Addons/Addons';
import Blog from './components/pages/Blog/Blog';
import Community from './components/pages/Community/Community';



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
          <Route path='/Footer' exact component={Footer} />
        </Switch>
       
    </Router>
  );
}

export default App;
