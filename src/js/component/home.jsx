import { faClock } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Update from "./update.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//create your first component
const Home = () => {
	return (
		<div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faClock} style={{ color: 'white' }}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#"><h1>Time since the application loads :</h1></a>
              <a className="nav-link" href="#"><Update/></a>
            </div>
          </div>
        </div>
      </nav>
		</div>
  
			
		
	);
  
  
};



export default Home;
