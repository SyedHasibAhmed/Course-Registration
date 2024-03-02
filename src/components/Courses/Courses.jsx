import React, { useEffect, useState } from 'react';
import Course from './Course/Course';

const Courses = ({handleSelect}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (

        <div className='bg-slate-200 '>
            <h3 className='text-3xl'>Courses: {courses.length}</h3>
          <div className='grid grid-cols-3 gap-4'>
          {
                courses.map(course => <Course
                key={course.id}
                course={course}
                handleSelect={handleSelect}
                ></Course>)
            }
          </div>
            
        </div>
    );
};

export default Courses;