import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)