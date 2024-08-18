// import img from '@assets/images/android-chrome-512x512.png'

import Home from "@ui/landing/pages/Home"
import LandingPageTemplate from "@ui/landing/templates/LandingPageTemplate"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  // Landing page
  {
    path: '/',
    element: <LandingPageTemplate />,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },
    ],
  }


])
function App() {
  return <RouterProvider router={router} />
}


export default App
