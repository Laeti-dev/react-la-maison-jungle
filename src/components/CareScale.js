import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
  const range = [1,2,3]

  const scaleType =
    careType === "light" ? (
        <img src={Sun} alt='sun-icon' />
      ) : (
        <img src={Water} alt='water-icon' />
    )

  const handleClick = (type) => {
    if (type === "light"){
      alert("Cette plante requiert de lumière")
    } else {
      alert("Cette plante requiert d'arrosage")
    }
  }

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()} onClick={() => handleClick(rangeElement)}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}

export default CareScale
