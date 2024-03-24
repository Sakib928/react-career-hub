import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplications } from "../../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobIDs = getStoredApplications();
    if (jobs.length) {
      const jobsApplied = [];
      for (const job of jobs) {
        const check = job.id.toString();
        if (storedJobIDs.includes(check)) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter == "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter == "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    } else if (filter == "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    }
  };

  return (
    <div>
      <p>applied jobs : {appliedJobs.length}</p>
      <div className="flex justify-between">
        <details className="dropdown">
          <summary className="m-1 btn">Sort</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li
              onClick={() => {
                handleJobsFilter("all");
              }}
            >
              <a>All</a>
            </li>
            <li
              onClick={() => {
                handleJobsFilter("onsite");
              }}
            >
              <a>Remote</a>
            </li>
            <li
              onClick={() => {
                handleJobsFilter("remote");
              }}
            >
              <a>Onsite</a>
            </li>
          </ul>
        </details>
        <div>
          <ul>
            {displayJobs.map((job) => {
              return (
                <li key={job.id}>
                  <span>{job.job_title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
