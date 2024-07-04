// import { useState } from 'react'
import './App.css'
import AudioSelector from './pages/AudioSelector';
import TaskConfiguration from './pages/TaskConfiguration';

function App() {
  // const [count, setCount] = useState(0)

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

        <div>footer</div>
      </div>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
