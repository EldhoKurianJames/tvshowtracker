import React from "react";
import ShowCard from "./ShowCard.jsx";

function ShowList({ shows }){
  if (!Array.isArray(shows)||shows.length === 0)
    return <p className="noshows">No shows found.</p>;
  return(
    <div className="showlistcontainer">
      {shows.map((item)=>{const showData = item.show ? item.show : item; return <ShowCard key={showData.id} show={showData}/>;})}
    </div>
  );
}
export default ShowList;
