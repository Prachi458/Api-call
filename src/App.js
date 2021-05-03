import React, { Component } from "react";
import "./App.css";
import RenderTableHeader from "./renderTableHeader";
import RenderTableRows from "./renderTableRows";
import UserForm from "./UserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      id: "",
      name: "",
      username: "",
      email: "",
      address: [],
      street: "",
      city: "",
      zipcode: "",
      phone: "",
      website: "",
      company: [],
      name: "",
      catchPhrase: "",
      bs: "",
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
        const userData = this.state.users;
        this.setState({
          users: userData.filter((user) => user.id !== id),
        });
      });
    });
  };

  updateRow = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        street: this.state.street,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phone: this.state.phone,
        website: this.state.website,
        name: this.state.name,
        catchPhrase: this.state.catchPhrase,
        bs: this.state.bs,
      }),
    })
      .then((result) => result.json())
      .then((resp) => {
        let selectedItem = this.state.users.find((item) => item.id === id);
        this.setState({
          name: selectedItem.name,
          username: selectedItem.username,
          email: selectedItem.email,
          street: selectedItem.address.street,
          city: selectedItem.address.city,
          zipcode: selectedItem.address.zipcode,
          phone: selectedItem.phone,
          website: selectedItem.website,
          name: selectedItem.company.name,
          catchPhrase: selectedItem.company.catchPhrase,
          bs: selectedItem.company.bs,
        });
      });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addRecord = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        street: this.state.street,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phone: this.state.phone,
        website: this.state.website,
        name: this.state.company.name,
        catchPhrase: this.state.company.catchPhrase,
        bs: this.state.company.bs,
      }),
    })
      .then((result) => result.json())
      .then((resp) => {
        let updatedData = [
          ...this.state.users,
          {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            address: {
              street: this.state.street,
              city: this.state.city,
              zipcode: this.state.zipcode,
            },
            phone: this.state.phone,
            website: this.state.website,
            company: {
              name: this.state.name,
              catchPhrase: this.state.catchPhrase,
              bs: this.state.bs,
            },
          },
        ];
        alert("Record Added");
        this.setState({
          users: updatedData,
          name: "",
          username: "",
          email: "",
          street: "",
          city: "",
          zipcode: "",
          phone: "",
          website: "",
          name: "",
          catchPhrase: "",
          bs: "",
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return this.state.users.length > 0 ? (
      <div>
        <UserForm
          {...this.state}
          addRecord={this.addRecord}
          handleInput={this.handleInput}
        />

        <table className="table-class">
          <thead>
            <tr className="row-class">
              <RenderTableHeader {...this.state} />
            </tr>
          </thead>
          <tbody key={this.state.users.id}>
            <RenderTableRows
              {...this.state}
              deleteRow={this.deleteRow}
              updateRow={this.updateRow}
            />
          </tbody>
        </table>
      </div>
    ) : (
      <div>No users.</div>
    );
  }
}

export default App;
