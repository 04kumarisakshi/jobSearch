import Filter from "./Components/Filter/Filter";
import Header from "./Components/Header/Header";
import Joblistings from "./Components/Joblistings/Joblistings";
import {data} from "./data.js"
import { useState } from "react";


function App() {

  const [jobs, setJobs] = useState(data);


  function filterItem(curcat) {
    const newItem = data.filter(newVal => {
      return newVal.languages === curcat;
    })

    setJobs(newItem);
  }

  return (
    <div className="App" style={{backgroundColor: "hsl(180, 52%, 96%)"}}>
      <Header/>
      <Filter jobs={jobs} setJobs={setJobs} filterItem={filterItem}/>
      <Joblistings jobs={jobs}/>
    </div>
  );
}

export default App;
