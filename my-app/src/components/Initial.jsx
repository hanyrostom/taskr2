import React from 'react';
import JobEntry from './JobEntry'

const Initial = ({initialJobs,handleStageChange}) => {
    console.log('initialJobs : ', initialJobs);
    return(
    <div className="category">   
        <h3>Applied + Email</h3>
        <div className="items">
        {initialJobs.map((job,key)=>
            <JobEntry
              handleStageChange={handleStageChange}
              key={key}
              job={job}
            />
        )}
        </div>
    </div>
)
}



export default Initial;