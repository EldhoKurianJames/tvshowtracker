import React from "react";
function SearchBar({query, setquery, onSearch}){
  function submitt(e){
    e.preventDefault();
    onSearch(query);
  }
  return(
    <form onSubmit={submitt} className="searchform">
      <input type="text" value={query} placeholder="Search TV shows..." onChange={(e) => setquery(e.target.value)}
        className="searchinput"/>
      <button type="submit" className="searchbtn">Search</button>
    </form>
  );
}
export default SearchBar;
