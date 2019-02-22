import React from 'react';


const JobEntry = ({job}) =>{
    console.log('job title==> ', job);
    return (
    <div>
        <h1>{job.jobTitle}</h1>
    </div>
)
    }


export default JobEntry;
