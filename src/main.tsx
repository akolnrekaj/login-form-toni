import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Items from "./pages/Items.tsx";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ItemDetails from "./pages/ItemDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
