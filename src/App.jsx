// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import AudioSelector from './pages/AudioSelector';
import TaskConfiguration from './pages/TaskConfiguration';

function App() {
  return (
    <>
      <div className='max-w-md mx-auto border border-black'>

        <div>navbar</div>

        <div className='p-4 border border-green-700'>
          <div className='border border-red-700'>
            <TaskConfiguration />
            <AudioSelector />
          </div>
        </div>

        <Navbar />
      </div>
    </>
  )
}

export default App
