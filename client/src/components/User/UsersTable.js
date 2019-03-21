import React from 'react';
import UsersTableHeader from './UsersTableHeader';
import UsersTableBody from './UsersTableBody';
import axios from 'axios';

export default class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const response = await axios.get('api/users');
      this.setState({users: await response.data});
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="users-table">
        <h3>Users</h3>
        <table className="table table-striped">
          <UsersTableHeader />
          <UsersTableBody users={this.state.users} />
        </table>
      </div>
    );
  }
}
