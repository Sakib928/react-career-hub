import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Featured Jobs : {jobs.length}</h1>
        <p className="my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-16">
        {jobs.map((job, idx) => {
          return idx < 4 ? <Job key={job.id} job={job}></Job> : "";
        })}
      </div>
    </div>
  );
};

export default FeaturedJobs;
