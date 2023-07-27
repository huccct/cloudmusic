import Home from '@/views/home'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export default router
