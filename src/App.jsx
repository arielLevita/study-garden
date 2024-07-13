// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import AudioSelector from './pages/AudioSelector';
// import TaskConfiguration from './pages/TaskConfiguration';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen max-w-md mx-auto border border-black'>

        <div>navbar</div>

        <div className='flex-grow-1 h-full p-4 border border-green-700'>
          <div>
            {/* <TaskConfiguration /> */}
            <AudioSelector />
          </div>
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
