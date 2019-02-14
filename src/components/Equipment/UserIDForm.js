import React from 'react';

export default class UserIDForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitsLeft: 0,
      maxLength: 12      
    };
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }
  componentDidMount() {
    this.setState({digitsLeft: this.state.maxLength});
  }  
  handleCodeChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    if (name === "userID") { 
      this.updateDigitsLeft(value);
    }
  }
  updateDigitsLeft(value) {
    this.setState({
      digitsLeft: this.state.maxLength - value.length,
    });
  }
  render () {
    let idDescription = this.state.digitsLeft === this.state.maxLength ? this.state.digitsLeft+"-digits" : this.state.digitsLeft+"-digits left"
    let placeholderDescriptionText = "Enter " + this.props.userDescription + " ID"

    return (
      <div className="user-id-form">
        <label>{this.props.userDescription} ID ({idDescription})</label>
        <input 
          type="text"
          className="form-control"
          placeholder={placeholderDescriptionText}
          name="userID"
          maxLength="12" 
          value={this.props.userID} 
          onChange={this.handleCodeChange}/>
      </div>
    )
  }
}