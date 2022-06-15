import React, { Component } from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="Form__input" onSubmit={this.handleSubmit}>
            <div class="form-group" className="Form__Email">
                <label for="ID">Your ID</label>
                <input type="text" class="form-control" id="ID" aria-describedby="emailHelp" placeholder="Enter Your NIC NUM"/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group" className="Form__Money">
                <label for="Money">Money (ETH) </label>
                <input type="number"  class="form-control"  placeholder="Enter Your Money ETH" />
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">I agreed to give this money as a Donation</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      );
    }
  }

  export default NameForm;