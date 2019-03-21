import React from 'react';

const UsersTableHeader = () =>
  <thead className="users-table-header">
    <tr>
      <th scope="col" className="username-col">Username</th>
      <th scope="col" className="name-col">Name</th>
      <th scope="col" className="email-col">Email</th>
      <th scope="col" className="joined-col">Joined</th>
      <th scope="col" className="status-col">Status</th>
      <th scope="col" className="actions-col">Actions</th>
    </tr>
  </thead>

export default UsersTableHeader