import Navbar from './components/shared/Navbar'
import './App.css'
import { useContext } from 'react'
import { StateContext } from './context/StateProvider';

function App() {
  //location state
  const { location } = useContext(StateContext);

  return (
    <div className='h-screen bg-pink-300'>
      <Navbar />
      {
        location === 'home'
          ? <h1 className='text-5xl font-bold'>HOME</h1>
          : <h1>NOThome</h1>
      }
    </div>
  )
}

export default App
