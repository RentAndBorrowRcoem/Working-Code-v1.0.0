import React from 'react';
import Navbar from '../src/layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import "../src/styles/GlobalStyles.css"
import HomePageC from './layouts/HomePageC';
import CategoriesC from './components/CategoriesC';
import PromoAdsC from './components/PromoAdsC';
import HowItWorksC from './components/HowItWorksC';
import PricePackage from './components/PricePackage';


function App() {
  return (
    <Router>
      <div>
        <Navbar /> 

        <Routes>
          <Route path="/pricing" element={<PricePackage />} />
          <Route
            path="/"
            element={
              <div>
                <HomePageC />
                <CategoriesC />
                <PromoAdsC />
                <HowItWorksC />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
