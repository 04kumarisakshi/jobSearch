import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./Firebase"
import JobCard from "./Components/JobCards";
import { Search } from "./Components/Search";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = []
    const q = query(collection(db, "jobs"), orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = []
    let q = collection(db, "jobs");

    if (jobCriteria.type) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
      q = query(q, where("location", "==", jobCriteria.location));
    }
    q = query(q, orderBy("postedOn", "desc"));
    console.log("Job Criteria:", jobCriteria);
    console.log("Constructed Query:", q);
    const req = await getDocs(q);
    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }
  

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div>
      <Navbar />
      <Header />
      <Search fetchJobsCustom={fetchJobsCustom} />
      {customSearch &&
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  )
}

export default App
