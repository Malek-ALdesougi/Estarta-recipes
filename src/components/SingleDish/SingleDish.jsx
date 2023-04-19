//redux
import { useSelector, useDispatch} from 'react-redux';

//react
import React, { useState } from 'react';

//MDB
import { MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

//router dom
import { useParams } from 'react-router';

//spinner
import PropagateLoader from 'react-spinners/PropagateLoader';
import { addComment } from '../../redux/commentsReducer/actions';

function SingleDish() {
  const { recipe, dish } = useParams();
  const { data, loading } = useSelector((state) => state.dataReducer);
  const currentDish = data[recipe]?.find((myDish) => myDish.name === dish);
  const [userComment, setUserComment] = useState('');
  const dispatch = useDispatch();

  const {comments} = useSelector(state => state.commentsReducer);

  console.log(comments);

  function handelChange(e){
    setUserComment(e.target.value);
  }

  function handelAddComment(){
    dispatch(addComment(currentDish, userComment));
  }

  if (loading) return <PropagateLoader />;

  return (
    <div className="bg-dark d-flex flex-column gap-5">
      <div className="">
        <img
          className="rounded"
          height={'300px'}
          width={'300px'}
          src={currentDish?.picture_url}
          alt=""
        />
      </div>
      <div className="text-start p-4 bg-primary text-light">
        <h3>Dish Name : {currentDish?.name}</h3>
        <p>Description : {currentDish?.description}</p>
        <h4 className="d-block">Ingrediants : </h4>
        <ul className="d-flex flex-start flex-row gap-3 flex-wrap">
          {currentDish?.ingredients.map((item) => {
            return <li className="d-flex flex-start">{item}</li>;
          })}
        </ul>
      </div>

      <div className="col-md-12 d-flex flex-column align-items-center">
        <h2 className='text-light'>Add a Comment</h2>
        <div className='col-md-6'>
          <MDBTextArea
            onChange={(e) => handelChange(e)}
            value={userComment}
            placeholder="Write you comment here"
            label="Comment"
            className="text-light"
            id="textAreaExample"
            rows={4}
          />
        </div>
        <MDBBtn onClick={handelAddComment} className='mt-2'>Add</MDBBtn>
      </div>


      <div>
        Comments section
      </div>
    </div>
  );
}

export default SingleDish;
