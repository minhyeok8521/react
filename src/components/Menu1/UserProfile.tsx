import * as React from 'react';

class UserProfile extends React.Component {

  UserProfile = (e) => {
    e.preventDefault();
    e.state = {};
  };

  UserProfileName = (e) => {
    const userName = e.value;
    alert(userName);
  };
  UserProfileAddr = (e) => {
    const userAddr = e.value;
  };

  render() {
    return (
      <form onSubmit={this.UserProfile}>
        <input
          type="text"
          placeholder="이름"
          onChange={this.UserProfileName}
        />
        <input type="text" placeholder="나이" onChange={this.UserProfileAddr} />
        <button type="submit">확인</button>
      </form>
    );
  }
}

export default UserProfile;
