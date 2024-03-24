import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [cardLimit, setCardLimit] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const customClass = `text-center my-8 ${cardLimit === 6 && "hidden"}`;
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
          return idx < cardLimit ? <Job key={job.id} job={job}></Job> : "";
        })}
      </div>
      <div className={customClass}>
        <button
          onClick={() => {
            setCardLimit(jobs.length);
          }}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
