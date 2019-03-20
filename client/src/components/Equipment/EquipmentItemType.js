import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';

export default class EquipmentItemType extends React.Component {
  render () {
    let equipmentItemType = this.props.equipmentItemType;

    if (equipmentItemType != null) {
      return (
        <tr className="equipment-item-type">
          <td className="name-col">{equipmentItemType.name}</td>
          <td className="category-col">{equipmentItemType.EquipmentCategory.name}</td>
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
  }
}