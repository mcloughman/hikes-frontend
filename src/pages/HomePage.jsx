import { useEffect } from "react"
import { useHikesContext } from "../hooks/useHikesContext"

// components
import Hike from "../components/Hike"

const Home = () => {
  const { hikes, dispatch } = useHikesContext()
  useEffect(() => {
    const fetchHikes = async () => {
      const response = await fetch("http://localhost:4000/api/hikes")
      const hikes = await response.json()
      if (response.ok) {
        dispatch({ type: "SET_HIKES", payload: hikes })
      }
    }
    fetchHikes()
  }, [dispatch])
  return (
    <div className="home">
      <div className="hikes">
        {hikes && hikes.map((hike) => <Hike key={hike._id} hike={hike} />)}
      </div>
    </div>
  )
}
export default Home
