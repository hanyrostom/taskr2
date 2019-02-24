import React from 'react';
import JobEntry from './JobEntry';

const Initial = ({initialJobs,handleStageChange, distribute}) => {
    console.log('initialJobs : ', initialJobs);
    return(
    <div className="category">   
        <h3>Applied + Email</h3>
        <div className="items">
        {initialJobs.reverse().map((job,key)=>
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



export default Initial;