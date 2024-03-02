import React from 'react';

const Course = ({course}) => {

    const{id,title, cover, price, credit, details} = course;
   
    return (
        <div className='display-flex p-4 '>

            <div>
                
            <div className='mb-5 border-2 border-gray-500 rounded-md'>
                <img className='w-full' src={cover} alt={`Cover picture of the ${title}`} />
                <div className='p-3 bg-gray-300'>
                    <h1 className='text-2xl'>{title}</h1>
                    <p>{details}</p>
                    <div className='flex justify-between'>
                        <p>$  Price:  {price}</p>
                        <p>Credit:{credit} hr</p>
                    </div>
                </div>
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ' >    
                        Select
                </button>

            </div>
            </div>



        </div>
    );
};

export default Course;