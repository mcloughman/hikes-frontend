import { useState } from "react"
import { useParams } from "react-router-dom"
import { useHikesContext } from "../hooks/useHikesContext"
import UpdateHikeForm from "./UpdateHikeForm"
import Rating from "./Rating"

const SingleHike = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const { hikes } = useHikesContext()
  console.log(hikes)
  const { id } = useParams()

  let hike = hikes.find((h) => h._id === id)
  console.log(hike)

  if (!hike) {
    return <p>Hike not found</p>
  }

  return (
    <div className="single-hike-container" id="top">
      <img src={hike.image} className="single-hike-img" />

      <div className="title-description">
        <h1>
          {hike.title} <Rating numStars={hike.rating} />
        </h1>
        <p>{hike.description}</p>
        {showUpdateForm && <UpdateHikeForm hike={hike} />}
        <button
          onClick={() => setShowUpdateForm(true)}
          className="update-btn mern-btn"
        >
          Update Hike
        </button>
      </div>
    </div>
  )
}

export default SingleHike
