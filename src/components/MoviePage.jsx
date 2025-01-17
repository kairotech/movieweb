import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import ShowMovies from './ShowMovies';
import RelatedMovies from './RelatedMovies';

function MoviePage() {
  const [data, setData] = useState({});
  const [related, setRelated] = useState([]);
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const RelMovie = async () => {
      setLoad(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9b053e3c20be9ccd6aed74ba470cead2`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const result = await response.json();
        setLoad(false);
        setRelated(result);
      } catch (error) {
        setLoad(false);
        console.error(error);
      }
    };

    RelMovie();
  }, [id]);

  useEffect(() => {
    const GetMovie = async () => {
      setLoad(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9b053e3c20be9ccd6aed74ba470cead2`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const result = await response.json();
        setLoad(false);
        setData(result);
      } catch (error) {
        setLoad(false);
        console.error(error);
      }
    };

    GetMovie();
  }, [id]);

  if (load) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="container page"><br/><br/><br/>
        <div className="row">
          <div className="col-md-6">
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
          </div>
          <div className="col-lg-6">
            <span>Country: {data.origin_country}</span>
            <h2>{data.title}</h2>
            <p>Release Date: {data.release_date}</p>
            <p>{data.overview}</p>
            <p>Language: {data.original_language}</p>
            <p>Popularity: {data.popularity}</p>
            <p>Runtime: {data.runtime} minutes</p>
            <p>Tagline: {data.tagline}</p>
            <p>Revenue: ${data.revenue}</p>
            <p>Budget: ${data.budget}</p>
            <span>Rating: {data.vote_average}</span>

            {data.genres && data.genres.length > 0 && (
              <div className="genres-list">
                <h4 style={{color:'white'}}>Genres:</h4>
                <ul>
                  {data.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

    
      </div>
      <div className="container">
        <div className="row">
        <RelatedMovies/>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
