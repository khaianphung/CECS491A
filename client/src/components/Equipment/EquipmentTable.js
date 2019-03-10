import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';
import EquipmentTableBody from './EquipmentTableBody';

export default class EquipmentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentItemTypes: [],
    };
  }

  componentDidMount() {
    this.getEquipmentTypes();
  }

  getEquipmentTypes() {
    fetch('/api/equipmentItemTypes')
      .then(res => res.json())
      .then(res => this.setState({ equipmentItemTypes: res.data }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="equipment-table">
        <h3>Equipment Types</h3>
        <table className="table table-striped">
          <EquipmentTableHeader />
          <EquipmentTableBody equipmentItemTypes={this.state.equipmentItemTypes} />
        </table>
      </div>
    );
  }
}