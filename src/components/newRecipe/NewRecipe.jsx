//mdb
import React, { useState } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

function NewRecipe() {
  const [category, setCategory] = useState('');
  const [newRecipe, setNewRecipe] = useState({
    "name": '',
    "description": '',
    "ingredients": [],
    "picture_url": ''
  });

  function handelNewRecipe(e) {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  }

  function handelIngredients(e) {
    const ingrediantsArray = e.target.value.split(' ');
    setNewRecipe({ ...newRecipe, ingredients: ingrediantsArray });
  }

  function handleAddNewRecipe() {
    try {
      fetch(`http://localhost:7000/${category}`, 
      {method: 'POST', headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      })
    } catch (error) {}

  }

  return <div className="bg-danger col-md-12">
     <div>
        <MDBInput onChange={(e) => setCategory(e.target.value)} name='category' label="Category" type="text"/>
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='name' label="Recipe Name" type="text" />
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='description' label="description" type="text" />
        <MDBInput onChange={(e) => handelIngredients(e)} name='ingredients' label="ingrediants" type="text" />
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='picture_url' label="image url" type="text" />
        <MDBBtn onClick={handleAddNewRecipe}>Add Recipe</MDBBtn>
      </div>
  </div>;
}

export default NewRecipe;