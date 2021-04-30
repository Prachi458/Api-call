import React, { Component } from "react";
import "./App.css";
import RenderTableHeader from "./renderTableHeader";
import RenderTableRows from "./renderTableRows";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getList();
  }
  getList = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          isLoading: false,
        });
      });
  };
  deleteRow = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        const aa = this.state.users;
        this.setState({
          users: aa.filter((user) => user.id !== id),
        });
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return this.state.users.length > 0 ? (
      <div>
        <table className="table-class">
          <thead>
            <tr className="row-class">
              <RenderTableHeader {...this.state} />
            </tr>
          </thead>
          <tbody>
            <RenderTableRows {...this.state} deleteRow={this.deleteRow} />
          </tbody>
        </table>
      </div>
    ) : (
      <div>No users.</div>
    );
  }
}
export default App;
