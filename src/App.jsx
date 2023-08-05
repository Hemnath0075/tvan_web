import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import AdminLogin from './Pages/Admin/AdminLogin';
import Tc from './Pages/TermsAndCondition/TermsAndCondition';
import TermsAndCondition from './Pages/TermsAndCondition/TermsAndCondition';
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin/tvan' element={<AdminLogin/>}/>
          <Route path='/terms-and-condition' element={<TermsAndCondition/>}/>
          <Route path='/refund-policy' element={<RefundPolicy/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
