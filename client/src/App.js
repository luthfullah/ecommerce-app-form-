import './App.css';
import ProductForm from './components/create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  return (
    <div className="bg-gray
    ">
     
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/create' element={<ProductForm/>} />
          <Route path='/get' element={<Products/>} />
          {/* <Route path="/dashboard" element={<Home  />} /> */}
         
        </Routes>
      </BrowserRouter>
      {/* <ProductCreate /> */}
    </div>
  );
}

export default App;
