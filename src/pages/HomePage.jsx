import { useEffect, useState } from "react"
import Hike from "../components/Hike"

const Home = () => {
  const [hikes, setHikes] = useState(null)

  useEffect(() => {
    const fetchHikes = async () => {
      const response = await fetch("http://localhost:4000/api/hikes")
      const hikes = await response.json()
      console.log(hikes)
      if (response.ok) {
        setHikes(hikes)
      }
    }
    fetchHikes()
  }, [])
  return (
    <div className="home">
      <div className="hikes">
        {hikes && hikes.map((hike) => <Hike key={hike._id} hike={hike} />)}
      </div>
    </div>
  )
}
export default Home
