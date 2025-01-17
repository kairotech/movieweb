import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function ShowMovies() {
    let [data, setData] = useState([]);
    let [load, setLoad] = useState(false);

let componentMounted = true;

useEffect(() => {
      const GetMovies = async () =>{
          setLoad(true);
          let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9b053e3c20be9ccd6aed74ba470cead2");
          let result = await response.json();
          if(componentMounted){
            setLoad(false);
            setData(result.results);
            console.log(data)
          }
          return () =>{
              componentMounted = false
          }
      }
      GetMovies();
}, [])


const ShowMovies = ()=>{
 
return (
    <>
    {data.map((movie)=>{
        return(
            <>
            <div className="col-md-4">
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview.substring(0, 80)}</p>
                    <NavLink className='btn btn-outline-dark' to={`/movies/${movie.id}`}>View 👊</NavLink>
                </div>
            </div>
            </>
        )
    })}
    </>
)

}

const Load = ()=>{
    return(
        <>
        <center>
            <h4>Fetching...</h4>
        </center>
        </>
    )
}
    return (
    <>
       <section className='movies text-center'>
       <div className="container">
        <center>
       <hr className='w-25' />
          <h4>Latest Movies</h4>
          <hr className='w-25' /></center>
       </div>

             <div className="container">
                <div className="row">

                {load ? <Load/> : <ShowMovies/>}

                </div>
             </div>



</section>
    </>
  )
}

export default ShowMovies
