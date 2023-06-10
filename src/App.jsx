import axios from 'axios'
import { useState } from 'react'

function App() {

  const [result, setResult] = useState()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const selectedURL = event.target.url.value
    console.log()
    axios.get(`http://${selectedURL}`)
      .then(result => console.log(result))
  }

  return (
    <>
      <h1>Networking test</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='url'>Ingrese url a probar</label>
        <input type="text" id="url" name='url'/>
        <button>Probar url</button>
      </form>
    </>
  )
}

export default App
