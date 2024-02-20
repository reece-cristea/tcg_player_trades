import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CardPage, LoginPage, ShoppingCartPage } from './pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "card/:card_id/:card_name",
        element: <CardPage />
    },
    {
        path: "shopping_cart",
        element: <ShoppingCartPage />
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)