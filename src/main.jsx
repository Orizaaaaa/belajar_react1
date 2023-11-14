import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '../src/pages/login.jsx'
import RegisterPage from '../src/pages/register.jsx'
import ErrorPage from '../src/pages/errorPage.jsx'
import ProductsPage from './pages/products'
import ProfilePage from './pages/profile'
import DetailProduct from './pages/detailProduct'
import { Provider } from "react-redux"
import store from './redux/store'
import DarkModeContextProvider from './Context/DarkMode'
import { TotalPriceProvider } from './Context/TotalPriceContext'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/product/:id",
    element: <DetailProduct />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store} >
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
