import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import './App.css'

export const LOCAL_STORAGE_KEY = 'tasks';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen mx-auto overflow-x-hidden'>
        <div className='w-screen grow-0 z-50'>
          <Topbar />
        </div>

        <div className='h-[calc(100vh-152px)] overflow-y-scroll'>
          <Outlet />
        </div>

        <div className='w-screen grow-0 z-50'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
