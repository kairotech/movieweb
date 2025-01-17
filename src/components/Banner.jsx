import React from 'react'
import { NavLink } from 'react-router-dom'

function Banner() {
  return (
    <>
      <section className='banner'>
      <nav class="navbar navbar-expand-sm navbar-dark bg-none">
	  <div class="container">
		<a class="navbar-brand " href="#">MOVIES</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <NavLink className="nav-link" to={"/"}>Home</NavLink>
			</li>
			<li class="nav-item">
            <NavLink className="nav-link" to={"/Movies"}>Movies</NavLink>
			</li>			
            <li class="nav-item">
            <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
			</li>			
		  </ul>		  
		</div>
	  </div>
	</nav>
        <br/>
        <div className="container">
            <div className="content">
                <h2>Watch Latest Movies</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias voluptatem ab maiores labore. Voluptas voluptatem adipisci neque dolores voluptatibus?</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
