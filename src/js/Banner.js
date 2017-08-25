import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className={this.props.bannerStyle + " h5 white items-center flex justify-center w-100 tc"}>
        <div>
          <div className="f1 fw3">Welcome to the Community</div>
          <div className="f3">Share, connect and collaborate</div>
        </div>
      </div>
    );
  }
}

export default Banner;
