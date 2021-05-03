import React from "react";

const UserForm = (props) => {
  return (
    <div className="form-div">
      <h1 className="heading-class">ADD USER</h1>
      <form onSubmit={props.addRecord} className="form-class">
        <label className="label-class">Name</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleInput}
          className="input-class"
          required
        />
        <br />
        <label className="label-class">Username</label>
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={props.handleInput}
          className="username-class"
          required
        />
        <br />
        <label className="label-class">Email</label>
        <input
          type="email"
          name="email"
          value={props.email}
          onChange={props.handleInput}
          className="email-class"
          required
        />

        <br />
        <label>Address:</label>
        <br />
        <label className="label-class">Street</label>
        <input
          type="text"
          name="street"
          value={props.street}
          onChange={props.handleInput}
          className="input-class"
          required
        />

        <br />
        <label className="label-class">City</label>
        <input
          type="text"
          name="city"
          value={props.city}
          onChange={props.handleInput}
          className="city-class"
          required
        />
        <br />
        <label className="label-class">Zipcode</label>
        <input
          type="number"
          name="zipcode"
          value={props.zipcode}
          onChange={props.handleInput}
          className="zipcode-class"
          required
        />
        <br />
        <label className="label-class">Phone</label>
        <input
          type="number"
          name="phone"
          value={props.phone}
          onChange={props.handleInput}
          className="input-class"
          required
        />
        <br />
        <label className="label-class">Website</label>
        <input
          type="text"
          name="website"
          value={props.website}
          onChange={props.handleInput}
          className="website-class"
          required
        />

        <br />
        <label>Company:</label>
        <br />
        <label className="label-class">Name</label>
        <input
          type="text"
          name="cname"
          value={props.cname}
          onChange={props.handleInput}
          className="input-class"
          required
        />
        <br />
        <label className="label-class">Catch Phrase</label>
        <input
          type="text"
          name="catchPhrase"
          value={props.catchPhrase}
          onChange={props.handleInput}
          className="catchPhrase-class"
          required
        />
        <br />
        <label className="label-class">BS</label>
        <input
          type="text"
          name="bs"
          value={props.bs}
          onChange={props.handleInput}
          className="bs-class"
          required
        />

        <br />
        <button type="submit" className="submitBtn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
