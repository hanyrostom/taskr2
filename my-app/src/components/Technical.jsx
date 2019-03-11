import React from 'react';
import JobEntry from './JobEntry';


const Technical = ({technicalJobs,updateStage, removeJob}) => {
    console.log('technicalJobs : ', technicalJobs);
    return(
    <div className="category">   
        <h3>Technical</h3>
        <div className="items">
        {technicalJobs.map((job,key)=>
            <JobEntry
              updateStage={updateStage}
              removeJob={removeJob}
              key={key}
              job={job}
            />
        )}
        </div>
    </div>
)
}



export default Technical;