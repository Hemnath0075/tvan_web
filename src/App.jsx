import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import AdminLogin from './Pages/Admin/AdminLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin/tvan' element={<AdminLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
