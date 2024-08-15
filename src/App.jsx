import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import './App.css'

export const LOCAL_STORAGE_KEY = 'tasks';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen mx-auto overflow-x-hidden border border-black'>
        <div className='grow-0'>
          <Topbar />
        </div>

        <div className='grow'>
          <Outlet />
        </div>

        <div className='grow-0'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
