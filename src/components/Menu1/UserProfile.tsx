import * as React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataName: '',
      dataAddr: '',
    };
  }

  UserProfile = (e) => {
    e.preventDefault();
  };

  UserProfileName = (e) => {
    this.setState({
      dataName: e.target.value,
    });
  };
  UserProfileAddr = (e) => {
    this.setState({
      dataAddr: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.UserProfile}>
        <input
          type="text"
          name="name"
          placeholder="이름"
          onChange={this.UserProfileName}

        />
        <input
          type="text"
          name="addr"
          placeholder="나이"
          onChange={this.UserProfileAddr}
        />
        <button type="submit">확인</button>
      </form>
    );
  }
}

export default UserProfile;
