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
    <div className='h-screen bg-gradient-to-r from-indigo-400 to-blue-400'>

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
