import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import Phones from './components/Phones.jsx'
import Phone from './components/phone'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
