import React, { Component } from 'react';
import './App.css';
import Initial from './components/Initial.jsx';
import Technical from './components/Technical.jsx';
import Challenge from './components/Challenge.jsx';
import OnSite from './components/OnSite.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
                  jobTitle: '',
                  company: '',
                  location: '',
                  contact: '',
                  initial: [
                    {jobTitle: "Front End Engineer", company: "Facebook", location: "Colorado", contact: "Mike", stage:"initial"},
                    {jobTitle: "Full Stack Engineer", company: "NBC", location: "New Jersey", contact: "Pedro", stage:"initial"},
                    {jobTitle: "Software Engineer", company: "Google", location: "New York", contact: "Costanza", stage: "initial"}
                    ],
                  technical: [],
                  challenge: [],
                  onSite: []
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStageChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('Event name : ', event.target.value)
    if(event.target.name) this.setState({[event.target.name]: event.target.value},()=>{console.log(this.state)});
    //else
  }

  handleSubmit(event) {
    let newJob = {
                  jobTitle: this.state.jobTitle,
                  company: this.state.company,
                  location: this.state.location,
                  contact: this.state.contact,
                  stage: 'initial'
                 };
    
    this.setState({initial:[...this.state.initial, newJob]},()=>{console.log(this.state)});
    event.preventDefault();
  }

  handleStageChange(event){
    console.log('handling State Change ', event.target)
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
          <Initial initialJobs={this.state.initial} handleStageChange={this.handleStageChange}/>
          <Technical technicalJobs={this.state.technical} handleStageChange={this.handleStageChange}/>
          <Challenge challengeJobs={this.state.challenge}handleStageChange={this.handleStageChange}/>
          <OnSite onSiteJobs={this.state.onSite}handleStageChange={this.handleStageChange}/>
        </div>
        
      </div>
    );
  }
}

export default App;
