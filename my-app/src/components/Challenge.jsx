import React from 'react';
import JobEntry from './JobEntry';

const Challenge = ({challengeJobs,handleStageChange,distribute}) => {
    console.log('challengeJobs : ', challengeJobs);
    return(
    <div className="category">   
        <h3>Challenge</h3>
        <div className="items">
        {challengeJobs.reverse().map((job,key)=>
            <JobEntry
              handleStageChange={handleStageChange}
              key={key}
              distribute={distribute}
              job={job}
            />
        )}
        </div>
    </div>
)
}



export default Challenge;