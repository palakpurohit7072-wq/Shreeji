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
import Footer from './Components/Footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shopbrand from './Components/Shopbrand';
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
      <Shopbrand />
      <Footer />
    </div>
  );
}

export default App;
