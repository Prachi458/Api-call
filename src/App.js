import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      isError: true,
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          isLoading: false,
          isError: false,
        });
      });
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th className="row-class" key={attr}>
        {attr.toUpperCase()}
      </th>
    ));
  };
  renderTableRows = () => {
    return this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td className="row-class">{user.id}</td>
          <td className="row-class">{user.name}</td>
          <td className="row-class">{user.username}</td>
          <td className="row-class">{user.email}</td>
          <td className="row-class">{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
          <td className="row-class">{user.phone}</td>
          <td className="row-class">{user.website}</td>
          <td className="row-class">{`${user.company.name}, ${user.company.catchPhrase}`}</td>
        </tr>
      );
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    if (this.state.isError) {
      return <div>Error</div>;
    }
    return this.state.users.length > 0 ? (
      <div>
        <table className="table-class">
          <thead>
            <tr className="row-class">{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    ) : (
      <div>No users.</div>
    );
  }
}
export default App;
