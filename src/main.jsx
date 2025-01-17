import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movies from './components/Movies.jsx'
import MoviePage from './components/MoviePage.jsx'
import Nav from './components/Nav.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/movies/:id' element={<MoviePage/>}/>
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
