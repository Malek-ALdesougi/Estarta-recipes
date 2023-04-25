//mdb
import React, { useState } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

function NewRecipe() {
  const {data} = useSelector((state) => state.dataReducer);
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

  return <div className="col-md-12 d-flex justify-content-center">
     <div className='p-5 w-50 d-flex flex-column gap-4'>
    <h1 className='text-primary'>Add New Recipe </h1>
        <select className='p-2 square border-secondary rounded' onChange={(e) => setCategory(e.target.value)} name='category' label="Category" type="text">
          <option value=''></option>
          {data ? Object.keys(data).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          }) 
          : ''}
        </select>
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='name' label="Recipe Name" type="text" />
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='description' label="description" type="text" />
        <MDBInput onChange={(e) => handelIngredients(e)} name='ingredients' label="ingrediants" type="text" />
        <MDBInput onChange={(e) => handelNewRecipe(e)} name='picture_url' label="image url" type="text" />
        <MDBBtn onClick={handleAddNewRecipe}>Add Recipe</MDBBtn>
      </div>
  </div>;
}

export default NewRecipe;
