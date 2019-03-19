import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';
import EquipmentTableBody from './EquipmentTableBody';
import axios from 'axios';

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

  async getEquipmentTypes() {
    try {
      const response = await axios.get('api/equipmentItemTypes');
      this.setState({equipmentItemTypes: await response.data});
    } catch (error) {
      console.log(error)
    }
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