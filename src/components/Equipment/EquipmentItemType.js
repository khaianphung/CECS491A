import React from 'react';

const EquipmentItemType = ({equipmentItemType}) => 
  <div className="row">
    <div className="col">{equipmentItemType.name}</div>
    <div className="col">{equipmentItemType.category}</div>
    <div className="col">{equipmentItemType.description}</div>
    <div className="col">{equipmentItemType.availableQuantity}</div>
    <div className="col">{equipmentItemType.totalQuantity}</div>
  </div>
export default EquipmentItemType;