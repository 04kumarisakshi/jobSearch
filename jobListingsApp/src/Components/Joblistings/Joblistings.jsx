import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Jobcard from "../JobCard/Jobcard";
import "./joblistings.css";

function Joblistings({ jobs }) {
  const [jobList, setJobList] = useState(jobs || []); // Initialize state with the jobs prop or an empty array
  const [loading, setLoading] = useState(true); // State for loading
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [newJob, setNewJob] = useState({
    id: "",
    company: "",
    position: "",
    location: "",
    postedAt: "",
    contract: "",
    role: "",
    level: "",
    tools: [],
    languages: [],
    logo: "", // Added field for the image link
  });

  useEffect(() => {
    if (jobs) {
      setLoading(false);
    }
  }, [jobs]);

  // Handle input change for the new job form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  // Handle form submission for adding a new job
  const handleSubmit = (e) => {
    e.preventDefault();
    const jobToAdd = { ...newJob, id: Date.now().toString(), postedAt: "Today" };
    setJobList([...jobList, jobToAdd]); // Add the new job to the job list
    setNewJob({
      id: "",
      company: "",
      position: "",
      location: "",
      postedAt: "",
      contract: "",
      role: "",
      level: "",
      tools: [],
      languages: [],
      logo: "", // Reset logo field after submission
    });
    setShowForm(false); // Hide form after submission
  };

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="mainContainer">
      <Container>
        {/* Button to toggle the visibility of the form */}
        <Button
          variant="contained"
          color="primary"
          onClick={toggleForm}
          sx={{ marginBottom: 2 }}
        >
          {showForm ? "Hide Form" : "Post a Job"} {/* Toggle button text */}
        </Button>

        {/* Conditionally render the Post Job Form */}
        {showForm && (
          <div>
            <Typography variant="h5" gutterBottom align="center">
              Post a New Job
            </Typography>
            <form onSubmit={handleSubmit} className="postJobForm">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Company"
                    name="company"
                    value={newJob.company}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Tech Stack"
                    name="position"
                    value={newJob.position}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Location"
                    name="location"
                    value={newJob.location}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Contract Type"
                    name="contract"
                    value={newJob.contract}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Role"
                    name="role"
                    value={newJob.role}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Level"
                    name="level"
                    value={newJob.level}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Company Logo URL"
                    name="logo"
                    value={newJob.logo}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Post Job
              </Button>
            </form>
          </div>
        )}

        {/* Loading and Job Listing */}
        {loading ? (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            Loading jobs...
          </Typography>
        ) : jobList.length > 0 ? (
          <Jobcard jobs={jobList} />
        ) : (
          <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
            No jobs available at the moment.
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default Joblistings;
