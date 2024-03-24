import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {dataLength}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          non inventore hic quisquam, esse blanditiis. Commodi magnam velit cum.
          Est recusandae provident sit reiciendis quod dolore, maiores ipsa
          error reprehenderit.
        </p>
      </div>
      {/* featured jobs card section */}
      <div className="grid grid-cols-2 items-start">
        {(jobs.slice(0,dataLength)).map(job=><Job key={job.id} job={job}></Job>)}
      </div>
      {/* show all jobs button */}
      <div className={`flex items-center justify-center my-10 ${(jobs.length === dataLength) &&'hidden'}`}>
        <button onClick={()=>setDataLength(jobs.length)} className="text-4xl bg-gray-400 p-3 rounded-xl text-white font-bold">show all</button>
      </div>
    </div>
  );
};

FeaturedJobs.propTypes = {};

export default FeaturedJobs;
