import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobApplication } from "./utility";

const AppliedJobs = () => {
  const [jobsApplied, setJobsApplied] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getSavedJobApplication();
    if (jobs.length > 0) {
      const applied = jobs.filter((job) => storedJobIds.includes("" + job.id));
      setJobsApplied([...applied]);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="pl-10 text-3xl font-bold text-red-500">
        Jobs i applied : {jobsApplied.length}
      </h2>
      <ul className="pl-10 my-10 list-disc text-3xl">
        {jobsApplied.map((job) => (
          <li className="my-4" key={job.id}>
            {job.job_title} - ({job.company_name})
          </li>
        ))}
      </ul>
    </div>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
