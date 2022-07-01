import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(data => data.json())
    .then(data => setToys(data))
  }, [])

  function handleDelete(oldToy){
    const donateToy = toys.filter((toy) => toy.id !== oldToy.id)

    setToys(donateToy)
  }

  function handleMoreLikes(likedToy){
    console.log(likedToy)
    const oneMoreLike = toys.map((toy) => {
      if(toy.id === likedToy.id){
        return likedToy
      } else {
        return toy
      }
    })
    setToys(oneMoreLike)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys = {setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete = {handleDelete} handleMoreLikes = {handleMoreLikes}/>
    </>
  );
}

export default App;
