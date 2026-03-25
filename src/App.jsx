 
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Players from './Players'
import { Suspense } from 'react'
 

 const fetchPlayers = async () => {
  const res = await fetch('/data.json');
  return res.json(); // ✅ function call
}

function App() {
  
   const playersPromise = fetchPlayers();

  return (
    <div className='max-w-[1400px] mx-auto p-3'>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<p>loading...</p>}>
          <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  )
}

export default App


