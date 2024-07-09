
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Student from './pages/Student'
import Prodact from './pages/Prodact'
import StudentDiteals from './pages/StudentDiteals'
import ProdactDiteals from './pages/ProdactDiteals'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/prodact' element={<Prodact/>}/>
        <Route path='/sdetails' element={<StudentDiteals/>}/>
        <Route path='/prodactd' element={<ProdactDiteals/>}/>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={shanto}/>
    </>
  )
}

export default App
