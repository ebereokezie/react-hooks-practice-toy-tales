import React from "react";

function ToyCard({toy, handleDelete, handleMoreLikes}) {
  


  function donateToy(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE",
    })
    .then(data => data.json())
    .then(()=> handleDelete(toy))
  }

  function likeToy(){

    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(
       {likes: toy.likes+1}
      )
    })
    .then(data => data.json())
    .then(data => handleMoreLikes(data))
  }
  
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick = {likeToy}>Like {"<3"}</button>
      <button className="del-btn"onClick={donateToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
