import { createBrowserRouter } from "react-router-dom";
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
import AboutPage from "../pages/AboutPage";
import NotFound from "../components/NotFound";
import ContactFormPage from "../pages/ContactFormPage";

const router = createBrowserRouter([
    {
        path:'/*',
        element: <App />,
        children: [
            {
                path: '/*',
                element: <HomePage />
            },
            {
                path: 'newtask/*',
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
                path: 'savedtasks',
                element: <SavedTasks />
            },
            {
                path: 'taskslist',
                element: <TasksListPage />
            },
            {
                path: 'statspage',
                element: <StatsPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactFormPage />
            },
            {
                path: 'underconstruction',
                element: <UnderConstruction />
            },
            {
                path:'*', 
                element: <NotFound />
            },
        ]
    }
])

export default router;