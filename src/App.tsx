import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Repos } from './components/repos/Repos'
import { OneRepo } from './components/repos/OneRepo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full'>
      <OneRepo/>
      <Repos/>
    </div>
  )
}

export default App
