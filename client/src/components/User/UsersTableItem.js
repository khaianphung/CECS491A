import React from 'react';

export default class UsersTableItem extends React.Component {
  render () {
    let user = this.props.user;

    return (
      <tr className="users-table-item">
        <td className="username-col">{user.username}</td>
        <td className="name-col">{user.firstName + ' ' + user.lastName}</td>
        <td className="email-col">{user.email}</td>
        <td className="joined-col">{user.createdAt}</td>
        <td className="status-col">{user.isActive ? 'Active' : 'Inactive'}</td>
        <td className="actions-col">
          <a href={"/users/" + user.firstName + user.lastName + "/edit"}><i className="fas fa-edit"></i></a>
          <a href="/users/new"><i className="fas fa-plus"></i></a>
          <a href=""><i className="fas fa-trash-alt"></i></a>
        </td>
      </tr>
    )
  };
}
