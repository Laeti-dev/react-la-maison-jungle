import '../styles/Banner.css'
/* declare a variable logo to which we assign the image */
/* import Recommendation from './Recommendation'*/
const Banner = ({ children }) => {

  return (
    <div className='lmj-banner'>
      {children}
{/*       <Recommendation /> */}
    </div>


    // It is also possible to define a style to test
    // <div style={{ //style takes an object
    //     color: 'black',
    //     textAlign: 'right',
    //     padding: 32, //react understands its px
    //     borderBottom: 'solid 3px black',
    // }}>
    //   <h1>{title.toUpperCase()}</h1>
    // </div>
  )
}

export default Banner
