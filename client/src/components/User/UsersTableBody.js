import React from 'react';
import UsersTableItem from './UsersTableItem';

export default class UsersTableBody extends React.Component {
  renderUsersTable() {
    return (
      this.props.users.map(
        ( _user, _index ) => (
          <UsersTableItem key={ _index }
          user={ _user} 
          />
      ) )
    )
  }

  render() {
    return (
      <tbody className="users-table-body">
        {this.renderUsersTable()}
      </tbody>
    );
  }
}