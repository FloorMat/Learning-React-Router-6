import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      {/**
       * Challenge: Add a loader to every host route. For now,
       * just have them `return null` (don't worry about checking
       * for authentication yet)
       */}
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} 
      loader={async () => {
        return null
      }} />
      <Route path="vans/:id" element={<HostVanDetail />} 
      loader={async () => {
        return null
      }}>
        <Route index element={<HostVanInfo />} 
        loader={async () => {
          return null
        }} />
        <Route path="pricing" element={<HostVanPricing />} 
        loader={async () => {
          return null
        }} />
        <Route path="photos" element={<HostVanPhotos />} 
        loader={async () => {
          return null
        }} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);