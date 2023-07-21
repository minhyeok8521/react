import * as React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      addr: '',
    };
    console.log('a');
  }

  UserProfile = (e) => {
    e.preventDefault();
    e.state = {};
  };

  UserProfileName = (e) => {
    e.state.name = e.target.value;
  };
  UserProfileAddr = (e) => {
    e.state.addr = e.target.value;
  };

  render() {
    return (
      <form onSubmit={this.UserProfile}>
        <input type="text" placeholder="이름" onChange={this.UserProfileName} />
        <input type="text" placeholder="나이" onChange={this.UserProfileAddr} />
        <button type="submit">확인</button>
      </form>
    );
  }
}

export default UserProfile;
