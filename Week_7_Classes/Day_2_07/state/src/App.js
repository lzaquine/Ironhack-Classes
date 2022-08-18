import './App.css'
import {useState} from 'react'
import Counter from './components/Counter'

function App() {
  const [theme, setTheme] = useState("light");

  /* Handler functions
  handles the events and state changes */

  const toogleTheme = (e) => {
    setTheme(e.target.value)
  }

  return (
    <div className={`App ${theme}`}>



    <h1>React state and events</h1>
      <Counter />

      <select onChange={toogleTheme()}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default App;
