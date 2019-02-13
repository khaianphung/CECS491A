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
    let codeDescription = this.state.digitsLeft === this.state.maxLength ? this.state.digitsLeft+"-digits" : this.state.digitsLeft+"-digits left"

    return (
      <form className="check-out-form">
      <h3>Check Out: Input Product Details</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
      </form>
    )
  }
}