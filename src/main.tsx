import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Items from "./pages/Items.tsx";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ItemDetails from "./pages/ItemDetails.tsx";
import Login from "./pages/Login.tsx";
import { LoginContextProvider } from "./context/LoginContext";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import PotvrdaPodatakaForm from "./pages/PotvrdaPodatakaForm.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/items" element={<Items />} />
              <Route path="/forma" element={<PotvrdaPodatakaForm />} />
              <Route path="/items/:id" element={<ItemDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  </StrictMode>
);
