import * as React from 'react';

class UserProfile extends React.Component {
  UserProfile = () => {};

  render() {
    return (
      <form onSubmit={this.UserProfile}>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="나이" />
      </form>
    );
  }
}

export default UserProfile;
