import React from 'react';

const EquipmentItemType = ({equipmentItemType}) => 
  <div className="equipment-item-type row">
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
export default EquipmentItemType;