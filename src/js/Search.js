import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search pl4 pl6-l pt3 pb3">
        <div className="ba searchTerm pv1 ph2 br4">
          <span className="ph2 search-icon"> </span>
          <input type="text" className="pl2 bn" placeholder="Search everywhere" />
        </div>
      </div>
    );
  }
}

export default Search;
