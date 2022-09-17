import { Box } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Members from "../Pages/Members";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import Pricing from "../Pages/Pricing";


function Main() {
  return (
    <Box flex={5} mt={10}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </Box>
  );
}

export default Main;
