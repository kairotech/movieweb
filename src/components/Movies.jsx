import React from 'react'
import Nav from './Nav'
import ShowMovies from './ShowMovies'
import { NavLink } from 'react-router-dom'
function Movies() {
  return (
    <>
      <Nav/>
      <ShowMovies/>
    </>
  )
}

export default Movies
