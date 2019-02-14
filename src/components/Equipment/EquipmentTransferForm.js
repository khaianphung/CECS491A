import React from 'react';
import ProductCodeForm from './ProductCodeForm'
import UserIDForm from './UserIDForm'

export default class EquipmentTransferForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCode: '',
      currentOwnerID: '',
      newOwnerID: ''
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
      <form className="equipment-transfer-form">
      <h3>Equipment Transfer:</h3>
        <div className="form-group">
          <ProductCodeForm productCode={this.productCode}/>
        </div>
        <div className="form-group">
          <UserIDForm userID={this.currentOwnerID} userDescription="Current Owner"/>
        </div>
        <div className="form-group">
          <UserIDForm userID={this.newOwnerID} userDescription="New Owner"/>
        </div>        
      </form>
    )
  }  
}