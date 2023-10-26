import { FaStar, FaStarHalfAlt } from "react-icons/fa"

const Rating = ({ numStars }) => {
  console.log(numStars)
  const fullStars = Math.floor(numStars)
  const hasHalfStar = numStars - fullStars >= 0.5
  const stars = []
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar KEY={i} />)
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />)
  }

  return <div className="rating-stars">{stars}</div>
}
export default Rating
