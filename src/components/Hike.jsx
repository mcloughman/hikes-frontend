import { useHikesContext } from "../hooks/useHikesContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
const Hike = ({ hike }) => {
  const { dispatch } = useHikesContext()
  const { user } = useAuthContext()
  const { title, rating, image, description, createdAt } = hike
  console.log(image)
  const handleDelete = async () => {
    if (!user) {
      return
    }
    // Optimistic UI suggested by AI. The Ninja doesn't use it in his application. But without it, I wasn't able to update the front without refreshing the app
    dispatch({ type: "DELETE_HIKE", payload: hike })
    const response = await fetch(
      `https://hikes-backend-e698c568813b.herokuapp.com/api/hikes${hike._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    )

    const json = await response.json()

    if (response.ok) {
      console.log(response)
    }
  }
  const truncated = (inputString, maxLength) => {
    const truncated = inputString.substring(0, maxLength)
    const lastSpaceIndex = truncated.lastIndexOf(" ")
    return lastSpaceIndex !== -1
      ? truncated.substring(0, lastSpaceIndex)
      : truncated
  }
  return (
    <article className="hike-article">
      <header className="hike-header">
        <h3>
          {title} ----- <span>{rating}</span>
        </h3>
      </header>
      <img src={image} className="article-img" />
      <p className="article-p">
        {truncated(description, 75)}...
        <Link className="read-more" to={`/${hike._id}`}>
          Read more
        </Link>
      </p>
      <p className="created-at-p">
        {formatDistanceToNow(new Date(createdAt))} ago
      </p>

      {user && user.userId === hike.user_id && (
        <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
      )}
    </article>
  )
}
export default Hike
