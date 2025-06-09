import React,{useState} from "react";
const ShowCard=({show})=>{
  const [showsummary,setshowsummary] = useState(false);
  const clickk = ()=>{
    setshowsummary(!showsummary);
  };
  return(
    <div className="showcard" onClick={clickk}>
      <img className="showcardimage" src={show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"} alt={show.name}/>
      <h3 className="showcardtitle">{show.name}</h3>
      <p className="showcardyear">{show.premiered ? show.premiered.split("-")[0] :"N/A"}</p>
      {showsummary && (
        <div className="showcardsummary" dangerouslySetInnerHTML={{__html: show.summary || "<em>no summary available</em>"}}/>
      )}
    </div>
  );
};
export default ShowCard;
