import JobCard from "@/components/shared/jobCard";
import { getJob } from "@/lib/services/api/jobs";
import { useEffect, useState } from "react";

function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [isJobLoading, setIsJobLoading] = useState(false);
  const [isJobError, setIsJobError] = useState(false);

  useEffect(() => {
    setIsJobLoading(true);
    getJob()
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.log(err);
        setIsJobError(true);
      })
      .finally(() => {
        setIsJobLoading(false);
      });
  }, []);

  if (isJobLoading) {
    return (
      <section className="py-8">
        <h2> Avilable Jobs </h2>

        <div className="mt-4 flex flex-col gap-y-8">
          <h2> Loading...... </h2>
        </div>
      </section>
    );
  }

  if (isJobError) {
    return (
      <section className="py-8">
        <h2> Avilable Jobs </h2>

        <div className="mt-4 flex flex-col gap-y-8">
          <h4> Error While fetching data from Database...... </h4>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2> Avilable Jobs </h2>

      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              _id={job._id}
              type={job.type}
              location={job.location}
            />
          );
        })}
      </div>
    </section>
  );
}

export default JobSection;
