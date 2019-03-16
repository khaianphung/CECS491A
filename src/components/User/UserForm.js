import React from 'react';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      username: 'dpan216',
      firstName: 'Daniel',
      lastName: 'Pan',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  render () {
    return (
      <form className="venue-form">
        <h3>Input Venue Details</h3>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter username" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}/>
        </div>        
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter First Name" 
            name="firstName" 
            value={this.state.firstName}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Last Name" 
            name="lastName" 
            value={this.state.lastName}
            onChange={this.handleChange}/>
        </div>        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter Email" 
            name="email" 
            value={this.state.email}
            onChange={this.handleChange}/>
        </div>        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }  
}