import React, { Component } from "react";
import { JobDescription } from "../component/JobDescription";

const jobs = require("../jobs");

export default class JobBoard extends Component {
  constructor(props) {
    // {
    //   handleClose, show, children;
    // }
    super(props);
    this.state = {
      job: jobs[0]
    };
  }
  render(props) {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    console.log("HERE:", this.state.job);
    return (
      <div className={showHideClassName}>
        <div className="job-board">
          <h1>Jobs Near You: </h1>
          <button type="button" onClick={this.props.handleClose}>
            close
          </button>
          <hr />
          <div className="job-list-and-description">
            <div className="job-board-info">
              {jobs.map(job => {
                return (
                  <div onClick={() => this.setState({ job: job })} key={job.id}>
                    <h1>{job.title}</h1>
                    <hr />
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="job-description">
              <JobDescription job={this.state.job} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
