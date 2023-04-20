//redux
import { useSelector, useDispatch} from 'react-redux';

//react
import React, { useRef, useState } from 'react';

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

  const dishComments = comments.filter((item) => item.dishName === dish)


  // TODO: read the comment for each dish
  

  console.log(comments);
  console.log(dish);

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
        <h3><span className='text-dark'>Dish Name :</span> {currentDish?.name}</h3>
        <h3 className='text-dark'>Description : </h3><p>{currentDish?.description}</p>
        <h3 className="d-block text-dark">Ingrediants : </h3>
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


      <div className='d-flex flex-column align-items-start p-4'>
        <div className='bg-primary w-100'>

        <h3 className='text-light'>Users Comments</h3>
        </div>
        {dishComments.map((comment) => {
          return <div>
            <p className='text-light'>{comment.comment}</p>
            </div>
        })}
      </div>
    </div>
  );
}

export default SingleDish;
