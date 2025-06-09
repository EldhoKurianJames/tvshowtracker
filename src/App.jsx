import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import ShowList from "./components/ShowList.jsx";
function App(){
  const [query,setquery]=useState("");
  const [shows,setShows]=useState([]);
  useEffect(()=>{
    fetch("https://api.tvmaze.com/shows?page=1").then((res)=>res.json()).then((data)=>{setShows(data.slice(0,20));}).catch((error)=>{
        console.error("Error fetching popular shows:",error);
      });
  }, []);
  function handleSearch(searchTerm){
    if(!searchTerm) return;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then((res)=>res.json()).then((data)=>{setShows(data);
      })
      .catch((error)=>{
        console.error("Error searching shows:", error);
      });
  }
  return(
    <div className="app">
      <SearchBar query={query} setquery={setquery} onSearch={handleSearch}/>
      <ShowList shows={shows}/>
    </div>
  );
}
export default App;
