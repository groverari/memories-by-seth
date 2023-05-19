import {} from 'react'
import './App.scss'
import { Route, Routes } from 'react-router'
import NavBar from './components/navbar/navbar'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<NavBar />} />
        <Route path="" element={<NavBar />}>
          <Route path="home" />
          <Route path="services" />
          <Route path="gallery" />
          <Route path="admin" />
        </Route>
      </Routes>
    </>
  )
}

export default App
