const Hike = ({ hike }) => {
  const { title, rating, image, description } = hike
  console.log(image)
  return (
    <article className="hike-article">
      <header className="hike-header">
        <h3>
          {title} ----- <span>{rating}</span>
        </h3>
      </header>
      <img src={image} width="300px" />
      <p>{description}</p>
    </article>
  )
}
export default Hike
