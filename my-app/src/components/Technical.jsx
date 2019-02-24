import React from 'react';
import JobEntry from './JobEntry';


const Technical = ({technicalJobs,handleStageChange,distribute}) => {
    console.log('technicalJobs : ', technicalJobs);
    return(
    <div className="category">   
        <h3>Technical</h3>
        <div className="items">
        {technicalJobs.reverse().map((job,key)=>
            <JobEntry
              handleStageChange={handleStageChange}
              distribute={distribute}
              key={key}
              job={job}
            />
        )}
        </div>
    </div>
)
}



export default Technical;