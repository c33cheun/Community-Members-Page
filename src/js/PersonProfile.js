import React, { Component } from 'react';

class PersonProfile extends Component {
  render() {
    return (
      <div className="ph3 pv2">
        <img src={this.props.picture.large} className="img-circle"/>
        <h3 className="ttc mv1">{this.props.name.first + " " + this.props.name.last}</h3>
        <h5 className="light-grey mv1">{this.props.email}</h5>
      </div>
    );
  }
}

export default PersonProfile;