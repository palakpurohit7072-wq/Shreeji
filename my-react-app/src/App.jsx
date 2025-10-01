import React from 'react';
import Navbar from './Components/Navbar';
import Fragnances from './Components/Fragnances';
import Dropdownmenu from './Components/Dropdownmenu';
import Singleslide from './Components/Singleslide';
import Slider from './Components/Slider';
import Signature from './Components/Signature';
import Newarrival from './Components/Newarrival';
import Cycleinhance from './Components/Cycleinhance';
import Homeessentials from './Components/Homeessentials';
import Faq from './Components/Faq';
import Threegeneration from './Components/Threegeneration';
import Trendingproducts from './Components/Trendingproducts';
import Footer from './Components/Footer';
import Shopbrand from './Components/Shopbrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes dropdown, collapse

import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Dropdownmenu />
      <Fragnances />
      <Singleslide />
      <Slider />
      <Signature />
      <Newarrival />
      <Cycleinhance />
      <Homeessentials />
      <Trendingproducts />
      <Threegeneration />
      <Faq />
      <Shopbrand />
      <Footer />
    </div>
  );
}

export default App;
