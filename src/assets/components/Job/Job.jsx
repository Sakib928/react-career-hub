import { CiLocationOn } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="absolute left-10">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-4">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4 my-3">
            <button className="btn btn-outline btn-info font-extrabold">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-info font-extrabold">
              {job_type}
            </button>
          </div>
          <div className="card-actions mb-3">
            <div className="badge badge-outline">
              <CiLocationOn />
              {location}
            </div>
            <div className="badge badge-outline">
              <BiDollarCircle />
              {salary}
            </div>
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
