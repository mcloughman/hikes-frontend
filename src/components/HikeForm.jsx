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
    const hike = await response.json()
    console.log(hike)
    if (!response.ok) {
      setError(hike.error)
    }
    if (response.ok) {
      setError(null)
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
      <h3>Add New Hike</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={hikeData.title}
        onChange={handleFormData}
      />
      <label htmlFor="image">Image URL</label>
      <input
        type="text"
        name="image"
        id="image"
        value={hikeData.image}
        onChange={handleFormData}
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
      />
      <label htmlFor="description">Description</label>
      <textarea
        rows="5"
        name="description"
        id="description"
        value={hikeData.description}
        onChange={handleFormData}
      />
      <button>Add Hike</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
export default HikeForm
