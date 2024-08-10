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
// eslint-disable-next-line no-unused-vars
import NewTaskFormHandler from './components/NewTaskFormHandler';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen max-w-md mx-auto overflow-x-hidden border border-black'>

        <div className='grow-0'>
          <Topbar />
        </div>

        <div className='grow'>
            {/* <TaskConfiguration /> */}
            {/* <AudioPage /> */}
            {/* <NewTaskFormHandler /> */}
            <HomePage />
        </div>

        <div className='grow-0'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
