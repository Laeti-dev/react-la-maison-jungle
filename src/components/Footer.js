import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('Adresse email')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleBlur = () => {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")
    }
  }

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className='lmj-footer-elem'>
        <input
        type = 'text'
        placeholder='Laissez-nous votre mail :'
        value = {inputValue}
        onChange = {handleInput}
        onBlur = {handleBlur}
        />
        <button type= 'submit'>Envoyer</button>
      </div>
    </footer>
  )
}

export default Footer
