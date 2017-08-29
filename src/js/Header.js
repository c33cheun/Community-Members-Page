import React, { Component } from 'react';
import Search from "./Search.js";

class Header extends Component {
  render() {
    return (
      <div className="navigation tc">
        <div className="flex-row inline-flex list center b">
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Home</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Dashboard</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">About</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Campaigns/Brand</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Files</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Departments</a></li>
          <li className="pl3 pl4-l pv3 pv4-l"><a href="#" className="fw5 ttu no-underline">Members</a></li>
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
