import React, { Component } from 'react';
import PersonProfile from './PersonProfile.js';

class CommunityMembers extends Component {
  renderPeople(people) {
    var peopleContent = [];
    for (var i = 0; i < people.length; i++) {
      peopleContent.push(
          <div key={i} className="w-50 w-20-l fl">
            <PersonProfile picture={people[i].picture} name={people[i].name} email={people[i].email}/>
          </div>
      )
    }
    return peopleContent;
  }

  render() {
    return (
      <div className="items-center flex justify-center w-100 tc flex-row">
        <div>
          {this.renderPeople(this.props.people)}
        </div>
      </div>
    );
  }
}

export default CommunityMembers;
