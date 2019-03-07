import React from 'react';

const EquipmentTableHeader = () =>
  <thead className="equipment-table-header">
    <tr>
      <th scope="col" className="name-col">Name</th>
      <th scope="col" className="category-col">Category</th>
      <th scope="col" className="description-col">Description</th>
      <th scope="col" className="quantity-col">Quantity</th>
      <th scope="col" className="actions-col">Actions</th>
    </tr>
  </thead>

export default EquipmentTableHeader