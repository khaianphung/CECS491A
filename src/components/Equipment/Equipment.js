import React from 'react';

const Equipment = ({equipment}) => 
  <div className="row">
    <div className="col">{equipment.code}</div>
    <div className="col">{equipment.name}</div>
    <div className="col">{equipment.availableQuantity}</div>
    <div className="col">{equipment.totalQuantity}</div>
  </div>

 export default Equipment;