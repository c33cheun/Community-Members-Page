import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="ph2 ph3-l pl6-l pt4 pt2-l pb3-l">
        <div className="bn ba-l flex searchTerm mv2 pv1-l mh3 ph2-l br0 br4-l w-80 w-100-l">
          <span className="ph2 search-icon di"> </span>
          <input type="text" className="f5 f6-l pl1 pl2-l bn-l" placeholder="Search everywhere" />
        </div>
      </div>
    );
  }
}

export default Search;
