import { useEffect } from 'react';

//fucntion
import { fetchData } from '../../redux/dataReducer/action';

//redux
import { useDispatch, useSelector } from 'react-redux';

function AllRecipes() {
  const dipatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    dipatch(fetchData());
  }, []);

  return (
    <>
      <div>
        {data ?  Object.keys(data)?.map((item) => {
          return <p>{item}</p>;
        })

        : 
        ''
    
    }
      </div>
    </>
  );
}

export default AllRecipes;
