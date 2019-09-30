import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const githubUsers = await Axios.get("https://api.github.com/users");
    const { data } = githubUsers;
    console.log(data);

    setUsers(data);
  };

  return (
    <div className="grid-3">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
