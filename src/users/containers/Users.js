import React, { Component } from "react";
import { connect } from "react-redux";

import UsersList from "../components/UsersList";
import { fetchRequested } from "./redux";

class Users extends Component {
  fetchData = () => {
    this.props.fetchRequested();
  };
  render() {
    const { users, isLoading, isError } = this.props;
    console.log(users);

    return (
      <div className="container">
        <h2>Users</h2>
        {isLoading && <p>isLoading...</p>}
        <button onClick={this.fetchData}>Fetch Users</button>
        <UsersList users={users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequested: () => {
    dispatch(fetchRequested());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
