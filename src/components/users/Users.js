/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import Axios from "axios";

const Users = () => {
  const {
    REACT_APP_CLIENT_ID: CLIENT_ID,
    REACT_APP_SECRET_ID: SECRET_ID
  } = process.env;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const githubUsers = await Axios.get(
      `https://api.github.com/users?client_id=${CLIENT_ID}&client_secret=${SECRET_ID}`
    );
    const { data } = githubUsers;

    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
