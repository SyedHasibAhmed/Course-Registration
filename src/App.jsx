
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'

function App() {

  const [select, setSelect] = useState([]);

  const handleSelect = course =>{
    const newSelect = [...select, course];
    setSelect(newSelect)
  }
  

  return (
    <>
      <h1 className='text-6xl center text-center mt-3'>Course Registration</h1>

    <div className='md:flex max-w-7xl mx-auto'>
      <Courses
      handleSelect={handleSelect}
      ></Courses>
      <Credits titles={titles}></Credits>
    </div>

    </>
  )
}

export default App
