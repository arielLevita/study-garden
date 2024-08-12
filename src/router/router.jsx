import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../pages/HomePage";
import App from "../App";
import HomePage from "../pages/HomePage";
import NewTaskFormHandler from "../components/NewTaskFormHandler";
import TaskConfiguration from "../pages/TaskConfiguration";
import TaskDescriptionPage from "../pages/TaskDescriptionPage";
import AudioSelector from "../components/AudioSelector";

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
                path: '/newtask',
                element: <NewTaskFormHandler />,
                children: [
                    {
                        path: '/newtask/taskconfiguration',
                        element: <TaskConfiguration />
                    },
                    {
                        path: '/newtask/taskdescription',
                        element: <TaskDescriptionPage />
                    },
                    {
                        path: '/newtask/audioselector',
                        element: <AudioSelector />
                    },
                ]
            },
        ]
    }
])

export default router;