import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import BagPage from './pages/BagPage'
import Mobiles from './pages/Mobiles';
import ProductDetailpage from './pages/ProductDetailpage';
import Favourates from './pages/Favourates';
import UserDetails from './pages/UserDetails';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/products/:id' element={<ProductDetailpage/>}/>
      <Route path='/mobiles' element={<Mobiles/>}/>
      <Route path='/favourate' element={<Favourates/>}/>
      <Route path='/user' element={<UserDetails/>}/>
      <Route path='/bag' element={<BagPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
