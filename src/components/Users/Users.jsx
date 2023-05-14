import React, { useEffect, useState } from "react";

// ^ Users Component
const Users = () => {
  const [users, setUsers] = useState([]);

  // * Use react effect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Users Component
      </h2>
      <h5>Dynamic Users: {users.length}</h5>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
