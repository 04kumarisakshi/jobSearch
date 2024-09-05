import { Container } from "@mui/material";
import React from "react";
import Jobcard from "../JobCard/Jobcard";
import "./joblistings.css";

function Joblistings({jobs}) {
  // Manage the state of our data


  return (
    <div className="mainContainer">
      <Container>
        <Jobcard jobs={jobs}/>
      </Container>
    </div>
  );
}

export default Joblistings;
