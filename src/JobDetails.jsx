import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { saveJobApplication } from './utility';

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job=>job.id == id);

    const { job_title, company_name } = job;

    const handleApply = () => {
        saveJobApplication(id);
    }
    
    
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl text-red-500 text-center font-bold">
          {job_title}({company_name})
        </h2>
        <button className="btn my-10" onClick={handleApply}>Apply Now</button>
        <Link to={-1}>
          <button className="btn">Go back</button>
        </Link>
      </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;