import React, { Component } from 'react';
import Search from "./Search.js";

class Header extends Component {
  render() {
    return (
      <div className="navigation tc">
        <div className="dn db-l list flex-l flex-row-l inline-flex-l list center-m center-l b">
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Home</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Dashboard</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">About</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Campaigns/Brand</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Files</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Departments</a></li>
          <li className="pl2 pl4-l pv2 pv4-l"><a href="#" className="f7 f5-l fw5 ttu no-underline">Members</a></li>
          <Search />
        </div>
        <div className="dib dn-l flex flex-row">
          <select className="f5 fw5 ttu no-underline" onchange="if (this.value) window.location.href = this.value;">
            <option className="f5 fw5 ttu no-underline" value="#">Home</option>
            <option className="f5 fw5 ttu no-underline" value="#">Dashboard</option>
            <option className="f5 fw5 ttu no-underline" value="#">About</option>
            <option className="f5 fw5 ttu no-underline" value="#">Campaigns/Brand</option>
            <option className="f5 fw5 ttu no-underline" value="#">Files</option>
            <option className="f5 fw5 ttu no-underline" value="#">Departments</option>
            <option className="f5 fw5 ttu no-underline" value="#">Members</option>
          </select>
          <div>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
