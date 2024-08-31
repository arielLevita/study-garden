import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import NewTaskFormHandler from "./components/NewTaskFormHandler";
import TaskConfiguration from "./pages/TaskConfiguration";
import TaskDescriptionPage from "./pages/TaskDescriptionPage";
import AudioSelector from "./pages/AudioSelector";
import UnderConstruction from "./components/UnderConstruction";
import SavedTasks from "./pages/SavedTasks";
import StatsPage from "./pages/StatsPage";
import TasksListPage from "./pages/TasksListPage";
import './App.css'
import NotFound from './components/NotFound';

export const LOCAL_STORAGE_KEY = 'tasks';

function App() {

  const location = useLocation();

  return (
    <>
      <div className='flex flex-col h-screen mx-auto overflow-x-hidden'>
          <div className='w-screen grow-0 z-50'>
            <Topbar />
          </div>

          <div className='h-[calc(100vh-152px)] overflow-y-scroll'>
            <AnimatePresence mode='wait'>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/newtask/*" element={<NewTaskFormHandler />}>
                  <Route path="taskconfiguration" element={<TaskConfiguration />}></Route>
                  <Route path="taskdescription" element={<TaskDescriptionPage />}></Route>
                  <Route path="audioselector" element={<AudioSelector />}></Route>
                </Route>
                <Route path="/savedtasks" element={<SavedTasks />}></Route>
                <Route path="/taskslist" element={<TasksListPage />}></Route>
                <Route path="/statspage" element={<StatsPage />}></Route>
                <Route path="/underconstruction" element={<UnderConstruction />}></Route>
                <Route path='*' element={<NotFound />}></Route>
              </Routes>
            </AnimatePresence>
          </div>

          <div className='w-screen grow-0 z-50'>
            <Navbar />
          </div>
      </div>
    </>
  )
}

export default App
