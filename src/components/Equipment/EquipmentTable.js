import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';
import EquipmentTableBody from './EquipmentTableBody';

var equipment = [
  {
    code: "000000000001",
    name: "Hat",
    category: "headwear",
    availableQuantity: 20,
    totalQuantity: 50,
  },
  {
    code: "000000000002",
    name: "Shirt",
    category: "apparel",
    availableQuantity: 40,
    totalQuantity: 100,
  },
  {
    code: "000000000003",
    name: "External Battery",
    category: "electronics",
    availableQuantity: 18,
    totalQuantity: 40,
  },
  {
    code: "000000000004",
    name: "Laptop",
    category: "electronics",
    availableQuantity: 4,
    totalQuantity: 20,
  },
  {
    code: "000000000005",
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