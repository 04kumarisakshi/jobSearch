import { Button, Card, CardContent, Container } from "@mui/material";
import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./filter.css";
import {data} from "../../data.js"

function Filter({ jobs, filterItem, setJobs}) {
  let alllanguageSet = new Set();
  let uniqueLanguageSet = new Set(["Language"]);
  let roleSet = new Set(["Role"]);
  let levelSet = new Set(["Level"]);
  let allToolsSet = new Set();
  let uniqueToolsSet = new Set(["Tools"]);

  data.map((job) => {
    alllanguageSet.add([...job.languages]);
    roleSet.add(job.role);
    levelSet.add(job.level);
    allToolsSet.add(job.tools);
  });

  alllanguageSet.forEach((item) => {
    item.forEach((itemInArray) => {
      uniqueLanguageSet.add(itemInArray);
    });
  });

  allToolsSet.forEach((item) => {
    item.forEach((itemInArray) => {
      uniqueToolsSet.add(itemInArray);
    });
  });

  let languagesArray = [...uniqueLanguageSet];
  let rolesArray = [...roleSet];
  let levelsArray = [...levelSet];
  let uniqueToolsArray = [...uniqueToolsSet];

  function handleOnClick() {
    setJobs(data);
  }





  return (
    <Container className="filterContainer">
      <Card className="cardFilter">
        <CardContent className="cardcontent">
          <div className="filterItemWrapper">
            <FilterItem languages={languagesArray} tools={uniqueToolsArray} roles={rolesArray} levels={levelsArray} filterItem={filterItem} jobs={jobs} setJobs={setJobs} />
          </div>

          <Button
            onClick={handleOnClick}
            variant="text"
            sx={{
              color: "custom.darkGrayCyan",
              fontWeight: "700",
              fontFamily: "League Spartan",
            }}
          >
            Clear
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Filter;
