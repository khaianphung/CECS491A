import React from 'react';

export default class ProductCodeForm extends React.Component {
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

    if (name === "productCode") { 
      this.updateDigitsLeft(value);
    }
  }
  updateDigitsLeft(value) {
    this.setState({
      digitsLeft: this.state.maxLength - value.length,
    });
  }
  render () {
    let codeDescription = this.state.digitsLeft === this.state.maxLength ? this.state.digitsLeft+"-digits" : this.state.digitsLeft+"-digits left"

    return (
      <div className="product-code-form">
        <label>Product Code ({codeDescription})</label>
        <input 
          type="text"
          className="form-control"
          placeholder="Enter Equipment Product Code"
          name="productCode"
          maxLength="12" 
          value={this.props.productCode} 
          onChange={this.handleCodeChange}/>
      </div>
    )
  }
}