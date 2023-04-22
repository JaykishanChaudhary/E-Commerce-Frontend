// import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import {BrowserRouter,  Routes,Route} from 'react-router-dom';
import DetailPage from './Components/DetailPage';
import CartPage from './Components/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/DetailPage' element={<DetailPage/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
