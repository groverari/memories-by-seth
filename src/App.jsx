import {} from 'react'
import './App.scss'
import { Route, Routes } from 'react-router'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import Gallery from './pages/gallery/gallery'
import Services from './pages/services/services'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<NavBar />}/>
        <Route path='/' element={<NavBar />}> 
          <Route path="home" element={<Home />}/>
          <Route path="services" element={<Services/> }/>
          <Route path="gallery" element={<Gallery/>} />
          <Route path="admin" />
        </Route>
      </Routes>
    </>
  )
}

export default App
