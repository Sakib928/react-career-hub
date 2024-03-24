import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const { job_description } = job;
  console.log(job, id);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-20">Job Details</h2>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3 ">
          <p>
            <span className="font-bold">Job Description :</span>
            {job_description}
          </p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="col-span-1 ">amigos</div>
      </div>
    </div>
  );
};

export default JobDetails;
