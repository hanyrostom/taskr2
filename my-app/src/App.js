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
                  initial:[]
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('Event name : ', event.target.name)
    this.setState({[event.target.name]: event.target.value},()=>{console.log(this.state)});
  }

  handleSubmit(event) {
    let newJob = {
                  jobTitle: this.state.jobTitle,
                  company: this.state.company,
                  location: this.state.location,
                  contact: this.state.contact
                 };
    
    this.setState({initial:[...this.state.initial, newJob]},()=>{console.log(this.state)});
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        
        <div>
           <h1>taskr</h1>
           <form onSubmit={this.handleSubmit}>
             <label>
              Job Title:
               <input type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange} />
             </label>
             <label>
              Company:
               <input type="text" name="company" value={this.state.company} onChange={this.handleChange} />
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
          <Initial initialJobs={this.state.initial}/>
          <Technical />
          <Challenge />
          <OnSite />
        </div>
        
      </div>
    );
  }
}

export default App;
