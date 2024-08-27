
import PageNotFound from "@ui/common/pages/PageNotFound"
import AboutUs from "@ui/landing/pages/AboutUs"
import BhrikutiSuite from "@ui/landing/pages/BhrikutiSuite"
import Blogs from "@ui/landing/pages/Blogs"
import Careers from "@ui/landing/pages/Careers"
import Contact from "@ui/landing/pages/Contact"
import Deluxe from "@ui/landing/pages/Deluxe"
import Executive from "@ui/landing/pages/Executive"
import GampoSuite from "@ui/landing/pages/GampoSuite"
import Home from "@ui/landing/pages/Home"
import MediaGallery from "@ui/landing/pages/MediaGallery"
import Policies from "@ui/landing/pages/Policies"
import Reviews from "@ui/landing/pages/Reviews"
import Sustainability from "@ui/landing/pages/Sustainability"
import WenchengSuite from "@ui/landing/pages/WenchengSuite"
import LandingPageTemplate from "@ui/landing/templates/LandingPageTemplate"
import RoomTemplate from "@ui/landing/templates/RoomTemplate"
import ScrollToTop from "function/ScrollToTop"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([

  // Landing page
  {
    path: '/',
    element: <>
      <ScrollToTop />
      <LandingPageTemplate />
    </>,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },

      { path: '*', element: <PageNotFound /> },
    ],
  },

  //Room Page
  {
    path: '/rooms',
    element: <>
      <ScrollToTop />
      <RoomTemplate /></>,
    children: [

      { path: '/rooms/deluxe', element: <Deluxe /> },
      { path: '/rooms/executive', element: <Executive /> },
      { path: '/rooms/songtsan-gampo', element: <GampoSuite /> },
      { path: '/rooms/bhrikuti-suite', element: <BhrikutiSuite /> },
      { path: '/rooms/wencheng-suite', element: <WenchengSuite /> },

      { path: '*', element: <PageNotFound /> },
    ],
  },

  //Other navigations
  {
    path: '/',
    element: <>
      <ScrollToTop />
      <RoomTemplate /></>,
    children: [
      // { index: true, element: <AboutUs /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/media-gallery', element: <MediaGallery /> },
      { path: '/career', element: <Careers /> },
      { path: '/sustainability', element: <Sustainability /> },
      { path: '/review', element: <Reviews /> },
      { path: '/contact', element: <Contact /> },
      { path: '/hotel-policies', element: <Policies /> },

      { path: '*', element: <PageNotFound /> },
    ],
  }


])
function App() {
  return <RouterProvider router={router} />
}


export default App
