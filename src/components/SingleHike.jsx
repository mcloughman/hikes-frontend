import { useState } from "react"
import { useParams } from "react-router-dom"
import { useHikesContext } from "../hooks/useHikesContext"
import Rating from "./Rating"

const SingleHike = () => {
  const { hikes } = useHikesContext()
  console.log(hikes)
  const { id } = useParams()

  let hike = hikes.find((h) => h._id === id)
  console.log(hike)

  if (!hike) {
    return <p>Hike not found</p>
  }

  return (
    <article className="single-hike-article hike-article" id="top">
      <header className="hike-header single-hike-header">
        <h1>
          {hike.title} <Rating numStars={hike.rating} />
        </h1>
      </header>

      <img src={hike.image} className="single-hike-img" />

      <div className="hike-body single-hike-body">
        <p>{hike.description}</p>
      </div>
    </article>
  )
}

export default SingleHike
