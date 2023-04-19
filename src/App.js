import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Home from './pages/Home/Home';
import NavBar from './components/navBar/NavBar';
import SingleRecipe from './components/singleRecipe/SingleRecipe';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single-recipe/:recipe' element={<SingleRecipe />} />
          <Route path='/single-recipe/:recipe/:dish' element={<SingleRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
