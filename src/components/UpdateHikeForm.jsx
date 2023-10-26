import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useHikesContext } from "../hooks/useHikesContext"
const apiKey = "yes"

const UpdateHikeForm = ({ hike }) => {
  const { dispatch } = useHikesContext()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: hike.title,
    description: hike.description,
    // other form fields...
  })

  const [error, setError] = useState(null)
  const [authError, setAuthError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  // Render your form with pre-populated formData
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Send PATCH request to update hike data
    try {
      const response = await fetch(
        `https://vast-brook-03843-baafe7d564ff.herokuapp.com/api/hikes/${hike._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "UPDATE_HIKE", payload: json })
        setError(null)
        setEmptyFields([])
        setAuthError(null)
        navigate("/")
      } else if (response.status === 400) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      } else if (response.status === 401) {
        setAuthError(json.message)
      }
    } catch (error) {
      console.error("Error updating hike:", error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h3>Update Hike</h3>
        {authError && <h4 className="error">{authError}</h4>}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={emptyFields.includes("title") ? "error" : ""}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className={emptyFields.includes("description") ? "error" : ""}
        />
        <label htmlFor="rating">Rating: </label>

        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating || ""}
          onChange={(e) =>
            setFormData({ ...formData, rating: parseInt(e.target.value) || "" })
          }
          className={`rating ${emptyFields.includes("rating") ? "error" : ""}`}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  )
}

export default UpdateHikeForm
