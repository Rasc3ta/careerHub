import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div className=" border flex flex-col justify-between items-start p-5 gap-4 m-4 ">
      <img src={logo} alt="logo" className="max-w-[200px] max-h-[50px]" />
      <h2 className="text-3xl font-bold">{job_title}</h2>
      <h3 className="text-2xl font-bold">{company_name}</h3>
      <div className="flex gap-6">
        <span className="p-2 rounded-lg text-purple-500 border border-purple-500">
          {remote_or_onsite}
        </span>
        <span className="p-2 rounded-lg text-purple-500 border border-purple-500">
          {job_type}
        </span>
      </div>
      <div className="flex gap-6">
        <span className="p-2 rounded-lg  ">{location}</span>
        <span className="p-2 rounded-lg  ">Salary : {salary}</span>
      </div>
      <Link to={`/jobs/${job.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
