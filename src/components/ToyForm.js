import React, {useState} from "react";

function ToyForm({setToys}) {
 const [name, setName] = useState("")
 const [image, setImage] = useState("")
 const [likes, setLikes] = useState(0)

 function handleSubmit(e){
  e.preventDefault()

  const toyCard = {name, image, likes}

  fetch("http://localhost:3001/toys",{
    method: "POST",
    headers: {
      "Content-type": "application/json"
    }, 
    body: JSON.stringify(toyCard)
  })
  .then(data => data.json())
  .then(data => setToys(oldToys => ([...oldToys, data])))

 }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {e => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
}

export default ToyForm;
