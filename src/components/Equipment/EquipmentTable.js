import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';
import EquipmentTableBody from './EquipmentTableBody';

// import equipment from 'equipmentTempData';
// console.log(equipment);

var equipment = [
  {
    code: "00001",
    name: "Hat",
    availableQuantity: 20,
    totalQuantity: 50,
  },
  {
    code: "00002",
    name: "Shirt",
    availableQuantity: 40,
    totalQuantity: 100,
  },
  {
    code: "00003",
    name: "External Battery",
    availableQuantity: 18,
    totalQuantity: 40,
  },
  {
    code: "00004",
    name: "Laptop",
    availableQuantity: 4,
    totalQuantity: 20,
  },
  {
    code: "00005",
    name: "iPhone",
    availableQuantity: 23,
    totalQuantity: 65,
  }
];

export default class EquipmentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: equipment,
    };
  }
  render() {
    return (
      <div className="equipment-table">
        <EquipmentTableHeader />
        <EquipmentTableBody equipment={equipment} />
      </div>
    );
  }
}