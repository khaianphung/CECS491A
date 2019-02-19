import React from 'react';

const EquipmentTableHeader = () =>
  <div className="equipment-table-header">
    <div className="row">
      <div className="col-md-2">Name</div>
      <div className="col-md-1">Category</div>
      <div className="col-md-2">Description</div>
      <div className="col-md-2">Available Quantity</div>
      <div className="col-md-2">Total Quantity</div>
      <div className="col-md-3">Actions</div>
    </div>
  </div>

export default EquipmentTableHeader