import React from "react";
import Feature from "./(feature)/Feature";
import Offering from "./(offering)/page";
import Blog from "./(blog)/page";
import Testimonial from "./(testimonial)/Testimonial";
const Home = () => {
  return (
    <div className="home-page">
      <Feature />
      <Offering />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default Home;
