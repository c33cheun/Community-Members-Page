import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className={this.props.bannerStyle + " h5 white items-center flex justify-center w-100 tc"}>
        <div>
          <div className="banner-title banner-title-s fw3">Welcome to the Community</div>
          <div className="f4 f2-l tracked-tight">Share, connect and collaborate.</div>
        </div>
      </div>
    );
  }
}

export default Banner;
