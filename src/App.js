import React from "react";
import reviews from "./data";
import Testimonial from "./Testinomial";

const App = () => {
  return <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold'>Our Testimonials</h1>
      <div className='bg-violet-400 h-[4px] max-w-[140px] mx-auto'></div>
      <Testimonial reviews={reviews}></Testimonial>
    </div>
  </div>;
};

export default App;
