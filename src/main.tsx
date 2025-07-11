import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout.tsx";
import { LoginContextProvider } from "./context/LoginContext";
import { MultistepFormContextProvider } from "./context/useMultistepFormContextProvider.tsx";
import PersonalInfo from "./pages/PersonalInfo.tsx";
import AddressInfo from "./pages/AddressInfo.tsx";
import IdCardInfo from "./pages/IdCardInfo.tsx";
import "./styles/styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginContextProvider>
      <MultistepFormContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/personal-info" element={<PersonalInfo />} />
              <Route path="/address-info" element={<AddressInfo />} />
              <Route path="/id-card-info" element={<IdCardInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MultistepFormContextProvider>
    </LoginContextProvider>
  </StrictMode>
);
