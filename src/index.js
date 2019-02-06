import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(<Gems />, document.getElementById('root'));

class Gems extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render () {

    return (
      <div>
        <ManualForm
        />
      </div>
      
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render () {

    return (
      <div>
        <ManualForm
        />
      </div>
      
    );
  }  
}

class ManualForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
      digitsLeft: 0,
      maxLength: 12
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({digitsLeft: this.state.maxLength});
  }  
  handleChange(event) {
    this.setState({
      productCode: event.target.value,
      digitsLeft: this.state.maxLength - event.target.value.length,
    });
  }
  render () {
    let description = this.state.digitsLeft == this.state.maxLength ? this.state.digitsLeft+"-digits" : this.state.digitsLeft+"-digits left"

    return (
      <form>
        <h3>Input Product Details</h3>
        <div className="form-group">
          <label>Product Code ({description})</label>
          <input type="text" className="form-control" id="productCode" placeholder="Enter Product Code" maxLength="12" value={this.state.productCode}  onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }  
}

let productList = [
  { name: "android", price: 231, info: "product of google" },
  { name: "iphone", price: 784, info: "product of apple" },
  { name: "windows", price: 156, info: "product of microsoft" }
];

/* Product */
class Product extends React.Component {

}

/* Total */
class Total extends React.Component {

}

/* ProductForm */
class ProductForm extends React.Component {

}

/* ProductList */
class ProductList extends React.Component {

}

ReactDOM.render(<Gems />, document.getElementById("root"));

