import React from 'react';
import JobEntry from './JobEntry';

const OnSite = ({onSiteJobs,handleStageChange,distribute}) => {
    console.log('onSiteJobs : ', onSiteJobs);
    return(
    <div className="category">   
        <h3>OnSite</h3>
        <div className="items">
        {onSiteJobs.reverse().map((job,key)=>
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



export default OnSite;