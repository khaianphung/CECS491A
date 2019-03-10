import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';

export default class EquipmentItemType extends React.Component {
  getEquipmentType() {
    return this.props.equipmentItemTypes.filter(itemType => { return this.props.match.params.name.toLowerCase() == itemType.name.toLowerCase()})[0];
  }
  render () {
    let equipmentItemType = this.props.equipmentItemType;
    console.log(this.props.index+1);
    console.log(((this.props.index+1) % 2 == 1));
    console.log((((this.props.index+1) % 2 == 1) ? 'odd': 'a'));

    if (equipmentItemType != null) {
      return (
        <tr className="equipment-item-type">
          <td className="name-col">{equipmentItemType.name}</td>
          <td className="category-col">{equipmentItemType.category}</td>
          <td className="description-col">{equipmentItemType.description}</td>
          <td className="quantity-col">
            <span className="available-quanity">{}</span> /
            <span className="total-quantity">{}</span>
          </td>
          <td className="actions-col">
            <a href={"/equipment/" + equipmentItemType.name.toLowerCase() + "/edit"}><i className="fas fa-edit"></i></a>
            <a href="/equipment/new"><i className="fas fa-plus"></i></a>
            <a href=""><i className="fas fa-trash-alt"></i></a>
          </td>
        </tr>
      )      
    }
    else {
      let equipmentItemType = this.getEquipmentType();

      if (equipmentItemType != null) {
        return (
          <div className="equipment-item-type">
            <EquipmentTableHeader />
            <div className="row">
              <div className="name col">{equipmentItemType.name}</div>
              <div className="category col">{equipmentItemType.category}</div>
              <div className="description col">{equipmentItemType.description}</div>
              <div className="quantity col">
                <span className="available-quanity">{equipmentItemType.availableQuantity}</span> /
                <span className="total-quantity">{equipmentItemType.totalQuantity}</span>
              </div>
              <div className="actions col">
                <a href={"/equipment/" + equipmentItemType.name.toLowerCase() + "/edit"}><i className="fas fa-edit"></i></a>
                <a href="/equipment/new"><i className="fas fa-plus"></i></a>
                <a href=""><i className="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
        )
      }
      else {
        return null; 
      }
    }
  }
}