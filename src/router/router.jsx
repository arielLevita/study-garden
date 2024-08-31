import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import NewTaskFormHandler from "../components/NewTaskFormHandler";
import TaskConfiguration from "../pages/TaskConfiguration";
import TaskDescriptionPage from "../pages/TaskDescriptionPage";
import AudioSelector from "../pages/AudioSelector";
import UnderConstruction from "../components/UnderConstruction";
import SavedTasks from "../pages/SavedTasks";
import StatsPage from "../pages/StatsPage";
import TasksListPage from "../pages/TasksListPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
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
        </Route>
    )
)

/* const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/newtask/*',
                element: <NewTaskFormHandler />,
                children: [
                    {
                        path: 'taskconfiguration',
                        element: <TaskConfiguration />
                    },
                    {
                        path: 'taskdescription',
                        element: <TaskDescriptionPage />
                    },
                    {
                        path: 'audioselector',
                        element: <AudioSelector />
                    },
                ]
            },
            {
                path: '/savedtasks',
                element: <SavedTasks />
            },
            {
                path: '/taskslist',
                element: <TasksListPage />
            },
            {
                path: '/statspage',
                element: <StatsPage />
            },
            {
                path: '/underconstruction',
                element: <UnderConstruction />
            },
        ]
    }
]) */

export default router;