import { useEffect } from 'react';

//fucntion
import { fetchData } from '../../redux/dataReducer/action';

//redux
import { useDispatch, useSelector } from 'react-redux';

//spinner
import PropagateLoader from 'react-spinners/PropagateLoader';

//navigate
import { useNavigate } from 'react-router';

//MDB
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';

function AllRecipes() {
  const dipatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    dipatch(fetchData());
  }, []);

  function handelNavigate(item) {
    navigate(`/single-recipe/${item}`);
  }

  if (loading) return <PropagateLoader />;

  return (
    <>
      <div className='col-md-12 p-5 bg-primary gap-5 d-flex justify-content-center flex-wrap'>
        {data
          ? Object.keys(data)?.map((item, index) => {
              return (
                <MDBCard onClick={() => handelNavigate(item)}>
                <img className='p-2 bg-dark ' height={'200px'} width={'300px'} src={'images/' + item + '.jpg'} alt='...' position='top' />
                <MDBCardBody className='bg-dark'>
                  <MDBCardTitle className='text-light'>{item}</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
              );
            })
          : ''}
      </div>
    </>
  );
}

export default AllRecipes;
