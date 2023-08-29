import {} from 'react'
import './App.scss'
import { Route, Routes } from 'react-router'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<NavBar />} />
        <Route path="" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="services" />
          <Route path="gallery" />
          <Route path="admin" />
        </Route>
      </Routes>
    </>
  )
}

export default App
