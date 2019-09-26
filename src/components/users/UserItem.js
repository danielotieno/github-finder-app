import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { name, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="Profile Pic"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{name}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
