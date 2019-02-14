import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';
import EquipmentTableBody from './EquipmentTableBody';

var equipment = [
  {
    code: "00001",
    name: "Hat",
    category: "headwear",
    availableQuantity: 20,
    totalQuantity: 50,
  },
  {
    code: "00002",
    name: "Shirt",
    category: "apparel",
    availableQuantity: 40,
    totalQuantity: 100,
  },
  {
    code: "00003",
    name: "External Battery",
    category: "electronics",
    availableQuantity: 18,
    totalQuantity: 40,
  },
  {
    code: "00004",
    name: "Laptop",
    category: "electronics",
    availableQuantity: 4,
    totalQuantity: 20,
  },
  {
    code: "00005",
    name: "iPhone",
    category: "electronics",
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