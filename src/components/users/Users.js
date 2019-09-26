import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        name: "Daniel Otieno",
        avatar_url: "https://avatars2.githubusercontent.com/u/14997154?v=4",
        html_url: "https://github.com/danielotieno"
      },
      {
        id: "2",
        name: "Kirin Dave",
        avatar_url: "https://avatars2.githubusercontent.com/u/36?v=4",
        html_url: "https://github.com/KirinDave"
      },
      {
        id: "3",
        name: "Top Funky",
        avatar_url: "https://avatars3.githubusercontent.com/u/26?v=4",
        html_url: "https://github.com/topfunky"
      }
    ]
  };
  render() {
    return (
      <div className="grid-3">
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
