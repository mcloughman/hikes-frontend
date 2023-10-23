import { useHikesContext } from "../hooks/useHikesContext"
const Hike = ({ hike }) => {
  const { dispatch } = useHikesContext()
  const { title, rating, image, description } = hike
  console.log(image)
  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:4000/api/hikes/${hike._id}`,
      {
        method: "DELETE",
      }
    )
    const deletedHike = await response.json()
    if (response.ok) {
      dispatch({ type: "DELETE_HIKE", payload: deletedHike })
    }
  }
  return (
    <article className="hike-article">
      <header className="hike-header">
        <h3>
          {title} ----- <span>{rating}</span>
        </h3>
      </header>
      <img src={image} width="300px" />
      <p>{description}</p>

      <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
    </article>
  )
}
export default Hike
