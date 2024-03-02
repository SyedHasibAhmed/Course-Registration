import React from 'react';

const Course = ({course, handleSelect}) => {
    const {cover, title, price, credit} = course;
    return (
        <div className='display-flex'>

        <div>
        <h3>Course</h3>
                    <img src={cover} alt="" />
                    <h3 className='text-3xl'>{title}</h3>
                    <p>{price}</p>
                    <p>{credit}</p>
        </div>

            <button 
            onClick={() => handleSelect(title)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ' >    
                Select
            </button>

        </div>
    );
};

export default Course;