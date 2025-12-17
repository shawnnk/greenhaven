import React from "react";
// import "./App.css";

/* bootstrap styles */
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import GalleryPage from "./components/Gallery/GalleryPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/plants" element={<Blog />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="gallery" element={<GalleryPage />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
