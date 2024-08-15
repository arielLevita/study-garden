import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import NewTaskFormHandler from "../components/NewTaskFormHandler";
import TaskConfiguration from "../pages/TaskConfiguration";
import TaskDescriptionPage from "../pages/TaskDescriptionPage";
import AudioSelector from "../pages/AudioSelector";
import UnderConstruction from "../components/UnderConstruction";

const router = createBrowserRouter([
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
                path: '/underconstruction',
                element: <UnderConstruction />
            },
        ]
    }
])

export default router;