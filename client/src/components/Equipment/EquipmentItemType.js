import React from 'react';
import EquipmentTableHeader from './EquipmentTableHeader';

export default class EquipmentItemType extends React.Component {
  getEquipmentType() {
    return this.props.equipmentItemTypes.filter(itemType => { return this.props.match.params.name.toLowerCase() == itemType.name.toLowerCase()})[0];
  }
  render () {
    let equipmentItemType = this.props.equipmentItemType;
    console.log(this.props.index+1);
    console.log(((this.props.index+1) % 2 == 1));
    console.log((((this.props.index+1) % 2 == 1) ? 'odd': 'a'));

    if (equipmentItemType != null) {
      return (
        <tr className="equipment-item-type">
          <td className="name-col">{equipmentItemType.name}</td>
          <td className="category-col">{equipmentItemType.category}</td>
          <td className="description-col">{equipmentItemType.description}</td>
          <td className="quantity-col">
            <span className="available-quanity">{}</span> /
            <span className="total-quantity">{}</span>
          </td>
          <td className="actions-col">
            <a href={"/equipment/" + equipmentItemType.name.toLowerCase() + "/edit"}><i className="fas fa-edit"></i></a>
            <a href="/equipment/new"><i className="fas fa-plus"></i></a>
            <a href=""><i className="fas fa-trash-alt"></i></a>
          </td>
        </tr>
      )      
    }
    else {
      let equipmentItemType = this.getEquipmentType();

      if (equipmentItemType != null) {
        return (
          <div className="equipment-item-type">
            <EquipmentTableHeader />
            <div className="row">
              <div className="name col">{equipmentItemType.name}</div>
              <div className="category col">{equipmentItemType.category}</div>
              <div className="description col">{equipmentItemType.description}</div>
              <div className="quantity col">
                <span className="available-quanity">{equipmentItemType.availableQuantity}</span> /
                <span className="total-quantity">{equipmentItemType.totalQuantity}</span>
              </div>
              <div className="actions col">
                <a href={"/equipment/" + equipmentItemType.name.toLowerCase() + "/edit"}><i className="fas fa-edit"></i></a>
                <a href="/equipment/new"><i className="fas fa-plus"></i></a>
                <a href=""><i className="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
        )
      }
      else {
        return null; 
      }
    }
  }
}

// var equipmentItemTypes = [
//   {
//     id: 1,
//     name: "Hat",
//     category: "Headwear",
//     fafaCategory: "fas fa-hard-hat",
//     description: "This is a hat",
//     availableQuantity: 1,
//     totalQuantity: 3,
//     equipmentItems: [
//       {
//         id: 1,
//         typeId: 1,
//         code: "000000000001",
//         isCheckedOut: true,
//         currentOwnerID: 5
//       },
//       {
//         id: 2,
//         typeId: 1,
//         code: "000000000002",
//         isCheckedOut: true,
//         currentOwnerID: 2
//       },
//       {
//         id: 3,
//         typeId: 1,
//         code: "000000000003",
//         isCheckedOut: false,
//         currentOwnerID: null
//       }                      
//     ]
//   },
//   {
//     id: 2,
//     name: "Shirt",
//     category: "Apparel",
//     fafaCategory: "fas fa-tshirt",
//     description: "This is a shirt",
//     availableQuantity: 2,
//     totalQuantity: 4,
//     equipmentItems: [
//       {
//         id: 4,
//         typeId: 2,
//         code: "000000000004",
//         isCheckedOut: true,
//         currentOwnerID: 1
//       },
//       {
//         id: 5,
//         typeId: 2,
//         code: "000000000005",
//         isCheckedOut: false,
//         currentOwnerID: 2
//       },
//       {
//         id: 6,
//         typeId: 2,
//         code: "000000000006",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 7,
//         typeId: 2,
//         code: "000000000007",
//         isCheckedOut: false,
//         currentOwnerID: null
//       }        
//     ]
//   },
//   {
//     id: 3,
//     name: "External Battery",
//     category: "Electronics",
//     fafaCategory: "fas fa-laptop",
//     description: "This is an external battery",
//     availableQuantity: 0,
//     totalQuantity: 2,
//     equipmentItems: [
//       {
//         id: 8,
//         typeId: 3,
//         code: "000000000008",
//         isCheckedOut: true,
//         currentOwnerID: 3
//       },
//       {
//         id: 9,
//         typeId: 3,
//         code: "000000000009",
//         isCheckedOut: true,
//         currentOwnerID: 1
//       }     
//     ]   
//   },
//   {
//     id: 4,
//     name: "Laptop",
//     category: "Electronics",
//     fafaCategory: "fas fa-laptop",
//     description: "This is a laptop",
//     availableQuantity: 4,
//     totalQuantity: 4,
//     equipmentItems: [
//       {
//         id: 10,
//         typeId: 4,
//         code: "000000000010",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 11,
//         typeId: 4,
//         code: "000000000011",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 12,
//         typeId: 4,
//         code: "000000000012",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 13,
//         typeId: 4,
//         code: "000000000013",
//         isCheckedOut: false,
//         currentOwnerID: null
//       }        
//     ]
//   },
//   {
//     id: 5,
//     name: "iPhone",
//     category: "Electronics",
//     fafaCategory: "fas fa-laptop",
//     description: "This is an iPhone",
//     availableQuantity: 3,
//     totalQuantity: 4,
//     equipmentItems: [
//       {
//         id: 14,
//         typeId: 5,
//         code: "000000000014",
//         isCheckedOut: true,
//         currentOwnerID: 4
//       },
//       {
//         id: 15,
//         typeId: 5,
//         code: "000000000015",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 16,
//         typeId: 5,
//         code: "000000000016",
//         isCheckedOut: false,
//         currentOwnerID: null
//       },
//       {
//         id: 17,
//         typeId: 5,
//         code: "000000000017",
//         isCheckedOut: false,
//         currentOwnerID: null
//       }        
//     ]
//   }
// ];