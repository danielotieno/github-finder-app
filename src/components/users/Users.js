/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";
import Axios from "axios";

const Users = () => {
  const {
    REACT_APP_CLIENT_ID: CLIENT_ID,
    REACT_APP_SECRET_ID: SECRET_ID
  } = process.env;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("a");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getUsers();
  }, [query]);

  const getUsers = async () => {
    setLoading(true);

    const githubUsers = await Axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${CLIENT_ID}&client_secret=${SECRET_ID}`
    );
    const { data } = githubUsers;

    setUsers(data.items);

    setLoading(false);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const triggerAlert = (message, type) => {
    setAlert({
      message,
      type
    });
    setTimeout(() => setAlert(alert), 2000);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value === "") {
      triggerAlert("Please enter something", "light");
    } else {
      setQuery(value);
      setValue("");
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Alert alert={alert} />
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={value}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        <div className="grid-3">
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
