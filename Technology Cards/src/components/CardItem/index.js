// Write your code here.
import './index.css'

const Technologies = props => {
  const {details} = props
  const {id, title, description, imgUrl, className} = details

  return (
    <div>
      <h1>Learn 4.0 Technologies</h1>
      <p>
        Get trained by alumni of IITs and top companies like
        amazon,Microsoft,Intel,Nvidla,Qualcomm,ect.Learn directly from
        profissionals involved in Product Development.
      </p>
      <li>
        <div className={className}>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={imgUrl} />
        </div>
      </li>
    </div>
  )
}

export default Technologies
