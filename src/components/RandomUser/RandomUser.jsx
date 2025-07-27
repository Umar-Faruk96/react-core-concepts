import React, { useEffect, useState } from "react";

// ^ Random User Component
const RandomUser = () => {
  const [users, setUser] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h2 style={{ textDecoration: "underline double green" }}>
        Random User Component
      </h2>
      <h5>Random User List: {users?.results.length}</h5>
      <ul style={{ listStyle: "none" }}>
        {users.results.map((user) => (
          <li>
            {user.name.title} {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomUser;
