import React, { useEffect, useState } from 'react';
import Course from './Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (

        <div className='bg-slate-200 '>
 
            <h1>Course</h1>
        </div>
    );
};

export default Courses;