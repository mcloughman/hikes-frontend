import { useEffect, useState } from "react"
import { useHikesContext } from "../hooks/useHikesContext"

// components
import Hike from "../components/Hike"

const Home = () => {
  const { hikes, dispatch } = useHikesContext()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchHikes = async () => {
      try {
        const response = await fetch(
          "https://hikes-backend-e698c568813b.herokuapp.com/api/hikes"
        )
        const hikes = await response.json()
        if (response.ok) {
          setLoading(false)
          dispatch({ type: "SET_HIKES", payload: hikes })
        }
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }
    fetchHikes()
  }, [dispatch])
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="home">
          <div className="hikes">
            {hikes && hikes.map((hike) => <Hike key={hike._id} hike={hike} />)}
          </div>
        </div>
      )}
    </>
  )
}
export default Home
