import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
function App() {
  const name = 'hardik'
  return (
    <>
      <NavBar />
      <div className='text-5xl text-green-400'>
        hello {name}
      </div>
    </>
  )
}
export default App