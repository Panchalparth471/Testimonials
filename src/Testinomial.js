import Card from "./Card";
import React from "react";
import { useState } from "react";
import { FaChevronLeft,FaChevronRight} from 'react-icons/fa';

function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

        function leftShiftHandler() {
            if (index - 1 < 0) {
                setIndex(reviews.length-1);
            }
            else {
                setIndex(index - 1);
            }
    }
 
    function rightShiftHandler() {
         if (index + 1 >=reviews.length ) {
             setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
            <Card review={reviews[index]}></Card>
            <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold'>

                <button className='hover:text-violet-500' onClick={leftShiftHandler}>  <FaChevronLeft /></button>
               <button className='hover:text-violet-500' onClick={rightShiftHandler}><FaChevronRight/></button> 
            </div>

            <div>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 py-2 px-10 rounded-md font-bold text-white text-lg mt-9' onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>

        
    );
}

export default Testimonial;