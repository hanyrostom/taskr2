import React from 'react';
import JobEntry from './JobEntry';

const Challenge = ({challengeJobs,handleStageChange}) => {
    console.log('challengeJobs : ', challengeJobs);
    return(
    <div className="category">   
        <h3>Challenge</h3>
        <div className="items">
        {challengeJobs.map((job,key)=>
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



export default Challenge;