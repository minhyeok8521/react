import * as React from 'react';

class UserProfile extends React.Component {
  UserProfile = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.UserProfile}>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="나이" />
        <button type="submit">확인</button>
      </form>
    );
  }
}

export default UserProfile;
