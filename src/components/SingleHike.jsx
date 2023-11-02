import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { useHikesContext } from "../hooks/useHikesContext"
import { useAuthContext } from "../hooks/useAuthContext"
import Rating from "./Rating"
import UpdateHikeForm from "../pages/UpdateHikeForm"

const SingleHike = () => {
  const [userIsCreator, setUserIsCreator] = useState(false)
  const { hikes } = useHikesContext()
  const { user } = useAuthContext()

  const { id } = useParams()

  let hike = hikes.find((h) => h._id === id)
  if (!hike) {
    return <p>Hike not found</p>
  }
  let match
  if (user) {
    match = hike.user_id === user.userId
    console.log(match)
  }

  const handleShowHikeForm = () => {
    setUserIsCreator(match)
  }
  return (
    <>
      <article
        className={`single-hike-article hike-article ${
          userIsCreator ? "hidden" : ""
        }`}
        id="top"
      >
        <header className="hike-header single-hike-header">
          <h1>
            {hike.title} <Rating numStars={hike.rating} />
          </h1>
        </header>

        <img src={hike.image} className="single-hike-img" />

        <div className="hike-body single-hike-body">
          <p>{hike.description}</p>
          {match && (
            <button onClick={handleShowHikeForm} className="update-btn">
              Update Hike
            </button>
          )}
        </div>
      </article>
      {userIsCreator && <UpdateHikeForm hike={hike} />}
    </>
  )
}

export default SingleHike
