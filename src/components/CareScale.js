import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({ scaleValue, careType }) => {
  const range = [1,2,3]

  let scaleType =
    careType === "light" ? (
        <img src={Sun} alt='sun-icon' />
      ) : (
        <img src={Water} alt='water-icon' />
    )

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}

export default CareScale
