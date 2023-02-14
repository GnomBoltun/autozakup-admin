import { useState } from 'react'
import Login from './views/login/Login';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Register from './views/Register';
import Forgot from './views/forgot';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/forgot',
      element: <Forgot/>
    }
  ]
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
