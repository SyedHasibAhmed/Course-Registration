import React from 'react';
import { LiaAccessibleIcon } from "react-icons/lia";
import { FaBookOpen } from "react-icons/fa";

const Course = ({course, handleAddToBookmark}) => {

    const{id,title, cover, price, credit, details} = course;
   
    return (
        <div className='display-flex p-4 '>

            <div>
                
            <div className='mb-5 border-2 border-gray-500 rounded-md'>
                <img className='w-full' src={cover} alt={`Cover picture of the ${title}`} />
                <div className='p-3 bg-cyan-800 text-white'>
                    <h1 className='text-2xl'>{title}</h1>
                    <p className='text-1xl'>{details}</p>
                    <br />
                    <div className='flex justify-between'>
                        <p>$  Price:  {price}</p>
                        <p className='flex justify-items-center'> <FaBookOpen></FaBookOpen> Credit:{credit} hr</p>
                    </div>
                </div>
                <button 
                    onClick={() => handleAddToBookmark(course)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center' >    
                       <LiaAccessibleIcon></LiaAccessibleIcon> Select
                </button>

            </div>
            </div>



        </div>
    );
};

export default Course;