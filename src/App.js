import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Home from './pages/Home/Home';
import NavBar from './components/navBar/NavBar';
import SingleRecipe from './components/singleRecipe/SingleRecipe';
import SingleDish from './components/SingleDish/SingleDish';
import AddRecipe from './pages/AddRecipe/AddRecipe';

//useEffect
import { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';

//fuction
import { fetchData } from './redux/dataReducer/action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single-recipe/:recipe' element={<SingleRecipe />} />
          <Route path='/single-recipe/:recipe/:dish' element={<SingleDish />} />
          <Route path='/add-recipe' element={<AddRecipe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
