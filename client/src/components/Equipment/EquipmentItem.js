import React from 'react';
import EquipmentItemHeader from './EquipmentItemHeader';

export default class EquipmentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }
  getEquipment() {
    return equipmentItemTypes
      .filter(itemType => 
        itemType.equipmentItems.some(items => this.state.id == items.id))
      .map(itemType => {
        return Object.assign({}, itemType, {equipmentItems : itemType.equipmentItems.filter(items => this.state.id == items.id)});
    });
  }
  render() {
    let equipmentItemType = this.getEquipment()[0];
    let equipmentItem;
    let status;
    let currentOwner;
    if (equipmentItemType != null) {
      equipmentItem = equipmentItemType.equipmentItems[0];
      status = equipmentItem.isCheckedOut ? "Checked Out" : "Available";
      currentOwner = equipmentItem.currentOwnerID == null ? "None" : equipmentItem.currentOwnerID;
    return (
      <div className="equipment-item">
        <EquipmentItemHeader />
        <div className="row">
          <div className="id col">{equipmentItem.id}</div>
          <div className="name col">{equipmentItemType.name}</div>
          <div className="category col">{equipmentItemType.category}</div>
          <div className="status col">{status}</div>
          <div className="current-owner col">{currentOwner}</div>
        </div>
      </div>
    );
    }
    else {
      return null;
    }
  }
}


var equipmentItemTypes = [
  {
    id: 1,
    name: "Hat",
    category: "Headwear",
    description: "This is a hat",
    availableQuantity: 1,
    totalQuantity: 3,
    equipmentItems: [
      {
        id: 1,
        typeId: 1,
        code: "000000000001",
        isCheckedOut: true,
        currentOwnerID: 5
      },
      {
        id: 2,
        typeId: 1,
        code: "000000000002",
        isCheckedOut: true,
        currentOwnerID: 2
      },
      {
        id: 3,
        typeId: 1,
        code: "000000000003",
        isCheckedOut: false,
        currentOwnerID: null
      }                      
    ]
  },
  {
    id: 2,
    name: "Shirt",
    category: "Apparel",
    description: "This is a shirt",
    availableQuantity: 2,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 4,
        typeId: 2,
        code: "000000000004",
        isCheckedOut: true,
        currentOwnerID: 1
      },
      {
        id: 5,
        typeId: 2,
        code: "000000000005",
        isCheckedOut: false,
        currentOwnerID: 2
      },
      {
        id: 6,
        typeId: 2,
        code: "000000000006",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 7,
        typeId: 2,
        code: "000000000007",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  },
  {
    id: 3,
    name: "External Battery",
    category: "Electronics",
    description: "This is an external battery",
    availableQuantity: 0,
    totalQuantity: 2,
    equipmentItems: [
      {
        id: 8,
        typeId: 3,
        code: "000000000008",
        isCheckedOut: true,
        currentOwnerID: 3
      },
      {
        id: 9,
        typeId: 3,
        code: "000000000009",
        isCheckedOut: true,
        currentOwnerID: 1
      }     
    ]   
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    description: "This is a laptop",
    availableQuantity: 4,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 10,
        typeId: 4,
        code: "000000000010",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 11,
        typeId: 4,
        code: "000000000011",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 12,
        typeId: 4,
        code: "000000000012",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 13,
        typeId: 4,
        code: "000000000013",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  },
  {
    id: 5,
    name: "iPhone",
    category: "Electronics",
    description: "This is an iPhone",
    availableQuantity: 3,
    totalQuantity: 4,
    equipmentItems: [
      {
        id: 14,
        typeId: 5,
        code: "000000000014",
        isCheckedOut: true,
        currentOwnerID: 4
      },
      {
        id: 15,
        typeId: 5,
        code: "000000000015",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 16,
        typeId: 5,
        code: "000000000016",
        isCheckedOut: false,
        currentOwnerID: null
      },
      {
        id: 17,
        typeId: 5,
        code: "000000000017",
        isCheckedOut: false,
        currentOwnerID: null
      }        
    ]
  }
];

// <div className="equipment-item">
//   <EquipmentItemHeader />
//   <div className="row">
//     <div className="id col">{equipmentItem.id}</div>
//     <div className="name col">{equipmentItemType.name}</div>
//     <div className="category col">{equipmentItemType.category}</div>
//     <div className="status col">{status}</div>
//     <div className="current-owner col">{currentOwner}</div>
//   </div>
// </div>