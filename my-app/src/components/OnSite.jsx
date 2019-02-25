import React from 'react';
import JobEntry from './JobEntry';

const OnSite = ({onSiteJobs,handleStageChange}) => {
    console.log('onSiteJobs : ', onSiteJobs);
    return(
    <div className="category">   
        <h3>OnSite</h3>
        <div className="items">
        {onSiteJobs.map((job,key)=>
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



export default OnSite;