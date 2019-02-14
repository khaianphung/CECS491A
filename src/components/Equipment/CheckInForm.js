import React from 'react';
import ProductCodeForm from './ProductCodeForm'

export default class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
    };
  }
  render () {
    return (
      <form className="check-in-form">
      <h3>Check In: Input Product Details</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}