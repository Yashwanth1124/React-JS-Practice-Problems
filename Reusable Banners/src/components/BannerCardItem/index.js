// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {id, headerText, description, className} = bannerCardsList
  console.log(id, headerText, description, className)
  return (
    <div className="banner-main-container">
      <ul className="banner-container">
        <li className={className}>
          <h1 className="card-heading">{headerText}</h1>
          <p className="card-description">{description}</p>
          <button className="custom-button" type="button">
            Show More
          </button>
        </li>
      </ul>
    </div>
  )
}

export default BannerCardItem
