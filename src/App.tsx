// import img from '@assets/images/android-chrome-512x512.png'

import PageNotFound from "@ui/common/pages/PageNotFound"
import BhrikutiSuite from "@ui/landing/pages/BhrikutiSuite"
import Deluxe from "@ui/landing/pages/Deluxe"
import Executive from "@ui/landing/pages/Executive"
import GampoSuite from "@ui/landing/pages/GampoSuite"
import Home from "@ui/landing/pages/Home"
import WenchengSuite from "@ui/landing/pages/WenchengSuite"
import LandingPageTemplate from "@ui/landing/templates/LandingPageTemplate"
import RoomTemplate from "@ui/landing/templates/RoomTemplate"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  // Landing page
  {
    path: '/',
    element: <LandingPageTemplate />,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },

      { path: '*', element: <PageNotFound /> },
    ],
  },

  //Room Page
  {
    path: '/rooms',
    element: <RoomTemplate />,
    children: [

      { path: '/rooms/deluxe', element: <Deluxe /> },
      { path: '/rooms/executive', element: <Executive /> },
      { path: '/rooms/songtsan-gampo', element: <GampoSuite /> },
      { path: '/rooms/bhrikuti-suite', element: <BhrikutiSuite /> },
      { path: '/rooms/wencheng-suite', element: <WenchengSuite /> },
      { path: '*', element: <PageNotFound /> },
    ],
  }


])
function App() {
  return <RouterProvider router={router} />
}


export default App
