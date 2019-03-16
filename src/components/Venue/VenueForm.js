import React from 'react';

export default class VenueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Venue 1',
      address: '',
      locationName: 'Globe Theatre',
      city: 'Vancouver',
      country: 'Canada',
      time: '05:00',
      date: '2011-08-19',
      pictureUrl: 'pexels-photo-92646.jpg',
      price: 0,
      description: 'This is a description'
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
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Venue Name" 
            name="name" 
            value={this.state.name}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Time</label>
          <input 
            type="time" 
            className="form-control" 
            placeholder="Enter Venue Time" 
            name="time" 
            value={this.state.time}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Venue Description" 
            name="description" 
            value={this.state.description}
            onChange={this.handleChange}/>
        </div>        
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            className="form-control" 
            name="date"
            value={this.state.date}
            onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }  
}