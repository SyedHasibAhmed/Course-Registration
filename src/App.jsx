
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'


function App() {



  return (
    <>
      <h1 className='text-6xl center text-center mt-3'>Course Registration</h1>

    <div className='md:flex max-w-7xl mx-auto'>
      <Courses></Courses>
      <Bookmarks></Bookmarks> 
    </div>

    </>
  )
}

export default App
