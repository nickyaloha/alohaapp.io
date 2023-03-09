import './App.css';
import BrowsePage from './pages/browse';
import Navbar from './components/navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pdp from './pages/pdp';
import Home from './pages/home';
import Checkout from './pages/checkout';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './pages/confirmation';

function App() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<BrowsePage/>}/>
        <Route path="/pdp" element={<Pdp/>}/>
      </Routes>
      {/* <Pdp/> */}
      {/* <BrowsePage/> */}
      <Home/>
      {/* <Checkout/> */}
      {/* <Confirmation/> */}
    </div>
    
  );
}

export default App;
