import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Layout from './Pages/Layout';
import OrganicFruits from './Pages/OrganicFruits';
import AggregrateFruits from './Pages/AggregrateFruits';
import PitsFruits from './Pages/PitsFruits';
import LegumasFruits from './Pages/LegumasFruits';
import About from './Pages/About';
import Services from './Pages/Services';
import Faq from './Pages/Faq';
import MyAccount from './Pages/MyAccount';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ForgetPassword from './Pages/ForgetPassword';
import SignUp from './Pages/SignUp';
import Favourite from './Pages/Favourite';
import { Toaster } from 'react-hot-toast';
import Login from './Components/Navbar/Login';
import './app.css'
import Blogs from './Pages/Blogs';
function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            {/* <Route path="/" element={<Layout />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/organic-fruits' element={<OrganicFruits />} />
            <Route path='/aggregate-fruits' element={<AggregrateFruits />} />
            <Route path='/pits-fruits' element={<PitsFruits />} />
            <Route path='/legumas-fruits' element={<LegumasFruits />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/faq' element={<Faq />} /> 
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/forgetPassword' element={<ForgetPassword />} />
            <Route path='/signUp' element={<SignUp />} />
            {/* <Route path='/cart' element={<Cart />} /> */}
            <Route  path='/favourite' element={<Favourite />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/blogs' element={<Blogs />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
