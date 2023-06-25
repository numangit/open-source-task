import Navbar from './components/shared/Navbar'
import './App.css'
import { useContext } from 'react'
import { StateContext } from './context/StateProvider';
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';

function App() {

  //location state
  const { location } = useContext(StateContext);

  return (
    <div
      // className='bg-pink-500'
      className='bg-gradient-to-r from-purple-500 to-blue-500'
    >

      <Navbar />
      {
        location === 'home'
          ? <Home />
          : <Orders />
      }

    </div>
  )
}

export default App
