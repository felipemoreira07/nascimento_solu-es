import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/Company/AboutUs";
import { Principal } from "./pages/Principal/Principal";

export const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
