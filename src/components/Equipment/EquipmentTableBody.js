import React from 'react';
import EquipmentItemType from './EquipmentItemType';

export default class EquipmentTableBody extends React.Component {
  renderEquipmentTable() {
    return (
      this.props.equipmentItemTypes.map(
        ( _equipmentItemType, _index ) => (
          <EquipmentItemType key={ _index } index={ _index }
          equipmentItemType={ _equipmentItemType} 
          />
      ) )
    )
  }
  render() {
    return (
      <div className="equipment-table-body">
        {this.renderEquipmentTable()}
      </div>
    );
  }
}