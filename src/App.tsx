import { Children, useState } from 'react'
import Login from './views/login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './views/Register';
import Forgot from './views/forgot';
import Dashboard from './views/dashboard';
import Sidebar from './views/global/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Box } from '@mui/system';

function App() {
  const [count, setCount] = useState(0);

  const unauthorisedRouter = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/forgot',
      element: <Forgot />
    }
  ]
  );
  const authorizedRouter = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    }
  ])

  const isAuth = true;

  return (
    <>
      {isAuth ?
        <ProSidebarProvider>
          <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar>
              <RouterProvider router={authorizedRouter}></RouterProvider>
            </Sidebar>
          </Box>
        </ProSidebarProvider>
        :
        <RouterProvider router={unauthorisedRouter}></RouterProvider>
      }
    </>

  )
}

export default App
