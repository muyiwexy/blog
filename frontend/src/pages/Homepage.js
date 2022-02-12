import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.data.map(review => (
        <div key={review.attributes.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <Link to={`/details/${review.id}`}>
          <img src={review.attributes.url}/>
          <h2>{review.attributes.title}</h2>
          </Link>
          
          <small>console list</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>
          
        </div>
      ))}
    </div>
  )
}
