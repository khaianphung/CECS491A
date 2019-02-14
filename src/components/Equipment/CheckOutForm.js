import React from 'react';
import ProductCodeForm from './ProductCodeForm'

export default class CheckOutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
    };
  }  
  render () {
    return (
      <form className="check-out-form">
      <h3>Check Out: Input Product Details</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}