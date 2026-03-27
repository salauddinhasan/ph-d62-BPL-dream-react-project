 
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Players from './Players'
import { Suspense, useState } from 'react'
import { ToastContainer} from 'react-toastify';


 const fetchPlayers = async () => {
  const res = await fetch('/data.json') 
  return res.json();
 }

function App() {
  
  const playersPromise = fetchPlayers();
  let [coin, setCoin] = useState(50000)


  return (
    <div className='max-w-[1400px] mx-auto p-3'>
      <Navbar coin={coin}/>
      <Banner/>
      <Suspense fallback={<p>loading....</p>}>
          <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>

       <ToastContainer />
       
    </div>
  )
}

export default App


