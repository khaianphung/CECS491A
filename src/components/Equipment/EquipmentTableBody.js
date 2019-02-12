import React from 'react';
import Equipment from './Equipment';

export default class EquipmentTableBody extends React.Component {
  renderEquipmentTable() {
    return (
      this.props.equipment.map(
        ( _equipment, _index ) => (
          <Equipment key= { _index }
          equipment={ _equipment} 
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