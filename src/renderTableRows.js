import React from "react";

const RenderTableRows = (props) => {
  return props.users.map((user) => {
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

export default RenderTableRows;
