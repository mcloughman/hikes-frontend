import { useHikesContext } from "../hooks/useHikesContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { Link } from "react-router-dom"
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
    const response = await fetch(
      `http://localhost:4000/api/hikes/${hike._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    )

    const deletedHike = await response.json()
    console.log(deletedHike.error)

    if (response.ok) {
      dispatch({ type: "DELETE_HIKE", payload: deletedHike })
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

      <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
    </article>
  )
}
export default Hike
