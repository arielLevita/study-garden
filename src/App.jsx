// import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import AudioPage from './pages/AudioPage';
// eslint-disable-next-line no-unused-vars
import HomePage from './pages/HomePage';
// eslint-disable-next-line no-unused-vars
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
            {/* <AudioPage /> */}
            <HomePage />
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
