import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDelete, handleMoreLikes}) {
  return (
    <div id="toy-collection">{toys.map((toy)=> <ToyCard key ={toy.id} toy = {toy} handleDelete = {handleDelete} handleMoreLikes ={handleMoreLikes} />)}</div>
  );
}

export default ToyContainer;
