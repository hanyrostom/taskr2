import React, { Component } from 'react';
import './App.css';
import Initial from './components/Initial.jsx';
import Technical from './components/Technical.jsx';
import Challenge from './components/Challenge.jsx';
import OnSite from './components/OnSite.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
                  jobTitle: '',
                  company: '',
                  location: '',
                  contact: '',
                  allJobs: {
                    'Facebook' : ['initial',{jobTitle: "Front End Engineer", company: "Facebook", location: "Colorado", contact: "Mike", stage:"initial"}],
                    'NBC': ['initial',{jobTitle: "Full Stack Engineer", company: "NBC", location: "New Jersey", contact: "Pedro", stage:"initial"}],
                    'Google':['initial',{jobTitle: "Software Engineer", company: "Google", location: "New York", contact: "Costanza", stage: "initial"}]
                    },
                  initial: [],
                  technical: [],
                  challenge: [],
                  onSite: [],
                  stages: ['company','jobTitle','contact','location']
                  };
  
  }

  componentDidMount = () => {
    this.distribute();
    
  }

  // componentWillUpdate = () => {
  //   this.distribute();
  // }

  distribute = () => {
    let initial = [],
        challenge = [],
        technical = [],
        onSite = [];
    let allJobs = this.state.allJobs;
    for (let company in allJobs){
      let stage = allJobs[company][0];
      let job = allJobs[company][1];

      if(stage === 'initial'){
        initial.push(job);
      }else if(stage === 'technical'){
        technical.push(job);
      }else if(stage === 'challenge'){
        challenge.push(job);
      }else if(stage === 'onSite'){
        onSite.push(job);
      }
    }

    console.log('challenge[]', challenge)
    this.setState({initial,technical, challenge, onSite},()=>console.log('reDistributed ',this.state));

  }

  handleChange = (event) => {
    console.log('Event.target.value', event.target.value); // technical
    console.log('Event.target.name', event.target.name);// facebook
    console.log('current Log', event.target.value.current)
    console.log('conditional', this.state.stages.includes(event.target.name))
    if(this.state.stages.includes(event.target.name)) this.setState({[event.target.name]: event.target.value},()=>{console.log(this.state)});
    else this.updateStage(event.target.name,event.target.value);
  }


  updateStage = (company,newStage) => {
    console.log('company to be updated: ', company);
    console.log('stage to be moved to: ',newStage);
    let newAllJobs = Object.assign({}, this.state.allJobs); //copy all opportunities
    newAllJobs[company][0] = newStage;//edit status of opportunity in copy
    newAllJobs[company][1].stage = newStage;
    console.log('newJobs : ', newAllJobs);
    this.setState({allJobs: newAllJobs},()=>this.distribute())
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let newJob = {
                  jobTitle: this.state.jobTitle,
                  company: this.state.company,
                  location: this.state.location,
                  contact: this.state.contact,
                  stage: 'initial'
                 };
    let newCompany = newJob.company;
    let newAllJobs = Object.assign({}, this.state.allJobs);
    newAllJobs[newCompany] = ['initial',newJob]

    this.setState({initial:[...this.state.initial, newJob], allJobs : newAllJobs},this.saveJob(newJob, this.state.initial.length - 1));
  }

  saveJob = (job, id) => {

    console.log('job', job)
    axios.post('/testing',{
      id,
      jobTitle: job.jobTitle,
      company: job.company,
      location: job.location,
      contact: job.contact,
      stage: 'initial'
     })
      .then(res => {
           console.log(res.data)
         })
         .then(()=>console.log('Server working'))
         .catch((err)=>console.error(err));
  }

  handleStageChange = (event) => {
    console.log('handling State Change ', event.target)
    this.distribute();
  }

  removeJob = (company) => {
    console.log(`we're deleting this: `, company)
    let newAllJobs = Object.assign({}, this.state.allJobs);
    delete newAllJobs[company];
     //Re distribute after deleting
    this.setState({allJobs: newAllJobs},()=>console.log('Deleted : ', this.distribute()))
  }
  
  //make an api call to get data once when app loads but not every time DOM is updated
  getCompanies = () => {

  }


  render() {
    return (
      <div className="App">
        
        <div>
           <h1>taskr</h1>
           <form onSubmit={this.handleSubmit} className='form'>
             <label>
              Company:
               <input type="text" name="company" value={this.state.company} onChange={this.handleChange} />
             </label>
             <label>
              Job Title:
               <input type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange} />
             </label>
             <label>
              Location:
               <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
             </label>
             <label>
              Contact:
               <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange} />
             </label>

             <input type="submit" value="Submit" />
           </form>
           
        </div>
        <div className="categories">
          <Initial initialJobs={this.state.initial} updateStage={this.updateStage} removeJob={this.removeJob}/>
          <Technical technicalJobs={this.state.technical} updateStage={this.updateStage} removeJob={this.removeJob}/>
          <Challenge challengeJobs={this.state.challenge} updateStage={this.updateStage} removeJob={this.removeJob}/>
          <OnSite onSiteJobs={this.state.onSite} updateStage={this.updateStage} removeJob={this.removeJob}/>
        </div>
        
      </div>
    );
  }
}

export default App;
