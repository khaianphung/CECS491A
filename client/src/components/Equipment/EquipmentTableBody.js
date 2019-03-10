import React from 'react';
import EquipmentItemType from './EquipmentItemType';

export default class EquipmentTableBody extends React.Component {
  renderEquipmentTable() {
    console.log(this.props.equipmentItemTypes);
    return (
      this.props.equipmentItemTypes.map(
        ( _equipmentItemType, _index ) => (
          <EquipmentItemType key={ _index } index={ _index }
          equipmentItemType={ _equipmentItemType} 
          />
      ) )
    )
  }
  // renderEquipmentItemType = ({ id, })

  render() {
    return (
      <tbody className="equipment-table-body">
        {this.renderEquipmentTable()}
      </tbody>
    );
  }
}