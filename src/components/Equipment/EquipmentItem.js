import React from 'react';

export default class EquipmentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: equipment[props.match.params.id - 1]
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col">{this.state.equipment.code}</div>
        <div className="col">{this.state.equipment.name}</div>
        <div className="col">{this.state.equipment.category}</div>
        <div className="col">{this.state.equipment.availableQuantity}</div>
        <div className="col">{this.state.equipment.totalQuantity}</div>
      </div>
    );
  }
} 

var equipmentItemTypes = [
  {
    id: 1,
    name: "Hat",
    category: "headwear",
    description: "This is a hat",
    availableQuantity: 1,
    totalQuantity: 3,
    equipmentItems: [
      {
        id: 1,
        code: "000000000001",
        isCheckedOut: true,
        currentOwnerID: 5
      },
      {
        id: 2,
        code: "000000000002",
        isCheckedOut: true,
        currentOwnerID: 2
      },
      {
        id: 3,
        code: "000000000003",
        isCheckedOut: false,
        currentOwnerID: null
      }                      
    ]
  },
  {
    id: 2,
    name: "Shirt",
    category: "apparel",
    description: "This is a shirt",
    availableQuantity: 2,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 4,
        code: "000000000004",
        isCheckedOut: true,
        currentOwnerID: 1
      },
      {
        id: 5,
        code: "000000000005",
        isCheckedOut: false,
        currentOwnerID: 2
      },
      {
        id: 6,
        code: "000000000006",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 7,
        code: "000000000007",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  },
  {
    id: 3,
    name: "External Battery",
    category: "electronics",
    description: "This is an external battery",
    availableQuantity: 0,
    totalQuantity: 2,
    equipmentItems: [
      {
        id: 8,
        code: "000000000008",
        isCheckedOut: true,
        currentOwnerID: 3
      },
      {
        id: 9,
        code: "000000000009",
        isCheckedOut: true,
        currentOwnerID: 1
      }     
    ]   
  },
  {
    id: 4,
    name: "Laptop",
    category: "electronics",
    description: "This is a laptop",
    availableQuantity: 4,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 10,
        code: "000000000010",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 11,
        code: "000000000011",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 12,
        code: "000000000012",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 13,
        code: "000000000013",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  },
  {
    id: 5,
    name: "iPhone",
    category: "electronics",
    description: "This is an iPhone",
    availableQuantity: 3,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 14,
        code: "000000000014",
        isCheckedOut: true,
        currentOwnerID: 4
      },
      {
        id: 15,
        code: "000000000015",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 16,
        code: "000000000016",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 17,
        code: "000000000017",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  }
];