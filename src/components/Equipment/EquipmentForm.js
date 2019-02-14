import React from 'react';
import ProductCodeForm from './ProductCodeForm'

export default class EquipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
      productName: '',
      productCategory: '',
      productTotalQuantity: 0,
      digitsLeft: 0,
      maxLength: 12
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({digitsLeft: this.state.maxLength});
  }  
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    if (name == "productCode") { 
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
      <form className="equipment-form">
        <h3>Input Product Details</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Product Name" 
            name="productName" 
            value={this.state.productName}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Product Category</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Product Category" 
            name="productCategory" 
            value={this.state.productCategory}
            onChange={this.handleChange}/>
        </div>        
        <div className="form-group">
          <label>Total Quantity</label>
          <input 
            type="number" 
            className="form-control" 
            placeholder="Enter Total Quantity" 
            name="productTotalQuantity"
            value={this.state.productTotalQuantity}
            onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }  
}