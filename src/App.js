import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import BagPage from './pages/BagPage'
import Mobiles from './pages/Mobiles';
import ProductDetailpage from './pages/ProductDetailpage';
import Favourates from './pages/Favourates';
import UserDetails from './pages/UserDetails';
// import { AuthProvider } from './pages/AuthContext';
// import LoginPage from './pages/LoginPage';
// import Privateroutes from './pages/PrivateRoutes';


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
      {/* <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={
              <Privateroutes>
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path='/products' element={<ProductsPage />} />
                  <Route path='/products/:id' element={<ProductDetailpage />} />
                  <Route path='/mobiles' element={<Mobiles />} />
                  <Route path='/favourate' element={<Favourates />} />
                  <Route path='/user' element={<UserDetails />} />
                  <Route path='/bag' element={<BagPage />} />
                </Routes>
              </Privateroutes>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider> */}
    </>
  );
}

export default App;




{/* <AuthProvider>
         <BrowserRouter>
         <Routes>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path="/*" element={
            <PrivateRoutes>
              <Routes>
                <Route index element={<Homepage/>}/>
                <Route path='/home' element={<Homepage/>}/>
                <Route className="nav-link" path='/men' element={<Menpage/>}/>
                <Route className="nav-link" path='/women' element={<WomenPage/>}/>
                <Route className="nav-link" path='/kids' element={<Kidspage/>}/>
                <Route className="nav-link" path='/homeliving' element={<HomeLivingpage/>}/>
                <Route className="nav-link" path='/beauty' element={<Beautypage/>}/>
                <Route className="nav-link" path='/studio' element={<Studiopage/>}/>
                <Route className="nav-link" path='/wishlist' element={<Wishlistpage/>}/>
                <Route className="nav-link" path='/bag' element={<Bagpage/>}/>
                <Route className="nav-link" path='/cart' element={<Cart/>}/>
                
                <Route className="nav-link" path='/profile' element={<ProfilePage/>}/>          
              </Routes>
            </PrivateRoutes>
          }/>
         </Routes>
         </BrowserRouter>
       </AuthProvider> */}




