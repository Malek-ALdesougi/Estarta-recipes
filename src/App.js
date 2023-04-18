import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import Home from './pages/Home/Home';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
