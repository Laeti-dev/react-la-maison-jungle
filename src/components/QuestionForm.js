import { useState } from 'react'

function QuestionForm() {
  // la ligne de code ci-dessous permet de
  // déclarer l'état initial pour  inputValue et
  // la fonction correspondante pour la modifier,
  // et de lui préciser la valeur par défaut "Posez votre question ici"
  const [inputValue, setInputValue] = useState('Posez votre question ici')
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // la fonction onChange sauvegarde dans le state local la valeur de l'input
        // on accede to input value with e.target.value
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>

  )
}

export default QuestionForm
