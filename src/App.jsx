// import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar';
import AudioPage from './pages/AudioPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TaskConfiguration from './pages/TaskConfiguration';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen max-w-md mx-auto overflow-hidden border border-black'>

        <div>
          <Topbar />
        </div>

        <div className='grow'>
            {/* <TaskConfiguration /> */}
            <AudioPage />
            {/* <HomePage /> */}
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
