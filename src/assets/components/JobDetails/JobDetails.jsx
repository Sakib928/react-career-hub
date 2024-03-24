import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../../utility/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("hoia gese kaj");
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-20">Job Details</h2>
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3 ">
          <p className="mb-16">
            <span className="font-bold">Job Description : </span>
            {job_description}
          </p>
          <p className="mb-16">
            <span className="font-bold">Job Responsibility : </span>
            {job_responsibility}
          </p>
          <p className="mb-16">
            <span className="font-bold">Educational Requirements : </span>
            {educational_requirements}
          </p>
          <p className="mb-16">
            <span className="font-bold">Experience : </span>
            {experiences}
          </p>
        </div>
        <div className="col-span-1 ">
          <button onClick={handleApplyJob} className="btn btn-primary">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default JobDetails;
