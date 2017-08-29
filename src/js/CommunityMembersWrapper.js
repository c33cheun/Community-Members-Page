import React, { Component } from 'react';
import { getUsersClient } from './main.js';
import CommunityMembers from './CommunityMembers.js'

class CommunityMembersWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
     users: []
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount () {
    this.loadMore();
  }

  loadMore () {
    console.log("loading users");
    getUsersClient.send();
    console.log(getUsersClient.results);
    var currentUsers = this.state.users;
    Object.keys(getUsersClient.results).forEach(function(key) {
        currentUsers.push(getUsersClient.results[key]);
    });
    this.setState({
      users: currentUsers
    });
  }

  render() {
    return (
      <div className="pv4 items-center flex justify-center w-100 tc">
        <div>
          <div className="f1 fw3 pb4">Members</div>
          <div>
            <CommunityMembers people={this.state.users} />
          </div>
          <div>
            <button className="loadMoreButton" onClick={this.loadMore}>
              <div className="f6 white mv2 mh3 b no-underline">
                Load more
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityMembersWrapper;
