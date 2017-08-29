import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="ph5 pl6-l pt4 pt3-l pb3-l">
        <div className="ba searchTerm pv1 ph2 br2 br4-l w-80 w-100-l">
          <span className="ph2 search-icon"> </span>
          <input type="text" className="f6 pl2 bn" placeholder="Search everywhere" />
        </div>
      </div>
    );
  }
}

export default Search;
