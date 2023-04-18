//redux
import { useSelector } from 'react-redux';

//params
import { useParams } from 'react-router';

//MDB
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';

function SingleRecipe() {
  const { recipe } = useParams();
  console.log(recipe);
  const { data } = useSelector((state) => state);
  console.log(data);

  return (

    <div  style={{height: '100vh'}} className="col-md-12 p-3 bg-primary gap-5 d-flex justify-content-center flex-wrap">
        <div className='w-100'>
        <h2>{recipe}</h2>
        </div>
      {data
        ? data[recipe].map((item) => {
            return (
              <MDBCard className='h-50'>
                <img
                  className="p-2 bg-dark "
                  height={'200px'}
                  width={'300px'}
                  src={item.picture_url}
                  alt="..."
                  position="top"
                />
                <MDBCardBody className="bg-dark">
                  <MDBCardTitle className="text-light">{item.name}</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            );
          })
        : ''}
    </div>
  );
}

export default SingleRecipe;