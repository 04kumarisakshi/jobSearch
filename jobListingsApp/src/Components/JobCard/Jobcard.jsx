import { Card, CardContent } from "@mui/material";
import React from "react";
import "./jobcard.css";

function Jobcard({ jobs, indexNumber }) {
  // Handle the click event to toggle the active background class
  const clickFilterItem = (event) => {
    event.currentTarget.classList.toggle("activeBackground");
    const clickedItem = event.target.innerText;
    // Optional: Handle the clicked item (e.g., filter jobs based on clicked item)
    console.log("Clicked filter item:", clickedItem);
  };

  return (
    <>
      {jobs.map((job, index) => {
        // Gather role, level, tools, and languages into a single array
        const itemsArray = [job.role, job.level, ...job.tools, ...job.languages].filter(Boolean);

        return (
          <Card
            key={job.id} // Use job.id as the unique key
            className={indexNumber < 2 ? "card" : ""}
            sx={{ margin: { xs: "60px 0", md: "20px 0" }, overflow: "visible" }}
          >
            <CardContent className="cardcontent">
              <div className="logoAndTextWrapper">
                <img src={job.logo} alt={`${job.company} logo`} className="companyLogo" />
                <div className="jobInfo">
                  <div className="titleInfo">
                    <p className="companyTitle">{job.company}</p>
                    {job.new && <span className="new">NEW!</span>}
                    {job.featured && <span className="featured">FEATURED</span>}
                  </div>
                  <p className="jobTitle">{job.position}</p>
                  <p className="jobDetails">
                    {job.postedAt} &nbsp; · &nbsp; {job.contract} &nbsp; · &nbsp; {job.location}
                  </p>
                </div>
              </div>

              {/* Render role, level, tools, and languages as clickable items */}
              <div className="icontexts">
                {itemsArray.map((item, i) => (
                  <p
                    key={`${job.id}-${i}`} // Use a combination of job.id and index for uniqueness
                    className="icon"
                    onClick={clickFilterItem}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default Jobcard;
