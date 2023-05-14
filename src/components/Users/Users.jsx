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
      <h3>Dynamic Users: {users.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
