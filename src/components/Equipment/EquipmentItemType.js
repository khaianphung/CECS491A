import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';

export default class EquipmentItemType extends React.Component {
  getEquipmentType() {
    return equipmentItemTypes.filter(itemType => { return this.props.match.params.name.toLowerCase() == itemType.name.toLowerCase()})[0];
  }
  render () {
    let equipmentItemType = this.props.equipmentItemType;

    if (equipmentItemType != null) {
      return (
        <div className="equipment-item-type">
          <div className="row">
            <div className="col-md-2">{equipmentItemType.name}</div>
            <div className="col-md-1">{equipmentItemType.category}</div>
            <div className="col-md-2">{equipmentItemType.description}</div>
            <div className="col-md-2">{equipmentItemType.availableQuantity}</div>
            <div className="col-md-2">{equipmentItemType.totalQuantity}</div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-success">Edit</button>
              <button type="submit" className="btn btn-primary">Add</button>
              <button type="submit" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      )      
    }
    else {
      let equipmentItemType = this.getEquipmentType();
      if (equipmentItemType != null) {
        return (
          <div className="equipment-item-type">
            <EquipmentTableHeader />
            <div className="row">
              <div className="col-md-2">{equipmentItemType.name}</div>
              <div className="col-md-1">{equipmentItemType.category}</div>
              <div className="col-md-2">{equipmentItemType.description}</div>
              <div className="col-md-2">{equipmentItemType.availableQuantity}</div>
              <div className="col-md-2">{equipmentItemType.totalQuantity}</div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-success">Edit</button>
                <button type="submit" className="btn btn-primary">Add</button>
                <button type="submit" className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="equipment-item-type">
          </div>
        )        
      }
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