import { useEffect } from 'react';

//fucntion
import { fetchData } from '../../redux/dataReducer/action';

//redux
import { useDispatch, useSelector } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';

function AllRecipes() {
  const dipatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dipatch(fetchData());
  }, []);

  if (loading) return <PropagateLoader />

  return (
    <>
      <div>
        {data ?  Object.keys(data)?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })

        : 
        ''
    
    }
      </div>
    </>
  );
}

export default AllRecipes;
