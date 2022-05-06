import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import React from 'react'
import PersonalDetails from "./components/personaldetails/PersonalDetails";

function routing() {
    const routing = (
        <Router>
          <div>
            <div>
            
              <Link to="/PersonalDetails">About</Link>
            </div>
      
            {/* <div>
              <Link to="/Contact">Contact</Link>
            </div>
      
            <div>
              <Link to="/Home">Home</Link>
            </div> */}
            
            <Route  path="/personaldetails" component={PersonalDetails} /> 
             {/* <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} /> */}
            
          </div>
        </Router>
    )
}

export default routing