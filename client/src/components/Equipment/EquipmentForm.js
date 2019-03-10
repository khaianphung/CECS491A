import React from 'react';
import ProductCodeForm from './ProductCodeForm'

export default class EquipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
      name: '',
      category: '',
      description: '',
      totalQuantity: 0,
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
      <form className="equipment-form">
        <h3>Input Equipment Details</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Equipment Name" 
            name="name" 
            value={this.state.name}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Equipment Category" 
            name="category" 
            value={this.state.category}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Equipment Description" 
            name="description" 
            value={this.state.description}
            onChange={this.handleChange}/>
        </div>        
        <div className="form-group">
          <label>Total Quantity</label>
          <input 
            type="number" 
            className="form-control" 
            name="totalQuantity"
            value={this.state.totalQuantity}
            onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }  
}