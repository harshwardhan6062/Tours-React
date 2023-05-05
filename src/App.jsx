import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tour } from './Tour'
import { Tours } from './Tours'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Tours />
  )
}

export default App
