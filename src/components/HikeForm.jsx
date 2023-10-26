import { useState } from "react"
import { useHikesContext } from "../hooks/useHikesContext"

const HikeForm = () => {
  const { dispatch } = useHikesContext()
  const [hikeData, setHikeData] = useState({
    title: "",
    description: "",
    image: "",
    rating: 0,
  })
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleFormData = (e) => {
    const { name, value } = e.target
    setHikeData((prevHikeData) => ({
      ...prevHikeData,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/api/hikes", {
      method: "POST",
      body: JSON.stringify(hikeData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response)
    const hike = await response.json()
    if (!response.ok) {
      setError(hike.error)
      setEmptyFields(hike.emptyFields)
      console.log(emptyFields)
    }
    if (response.ok) {
      setError(null)
      setEmptyFields([])
      console.log("New hike added")
      setHikeData({
        title: "",
        rating: 0,
        image: "",
        description: "",
      })
      // this should cause a rerender of the home page which should now include the new workout without another fetch
      dispatch({ type: "CREATE_HIKE", payload: hike })
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Hike</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={hikeData.title}
        onChange={handleFormData}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        name="image"
        id="image"
        value={hikeData.image}
        onChange={handleFormData}
        className={emptyFields.includes("image") ? "error" : ""}
      />
      <label htmlFor="rating">Rating</label>
      <input
        type="number"
        step="0.5"
        min="0"
        max="5"
        name="rating"
        id="rating"
        value={hikeData.rating}
        onChange={handleFormData}
        className={emptyFields.includes("rating") ? "error" : ""}
      />
      <label htmlFor="description">Description</label>
      <textarea
        rows="5"
        name="description"
        id="description"
        value={hikeData.description}
        onChange={handleFormData}
        className={emptyFields.includes("description") ? "error" : ""}
      />
      <button className="add-btn">Add Hike</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default HikeForm
