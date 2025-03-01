import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, TextField, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Home as HomeIcon, Info as InfoIcon, LocalTaxi as LocalTaxiIcon, ContactMail as ContactMailIcon, Event as EventIcon, Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/"> <HomeIcon /> Home</Button>
      <Button color="inherit" component={Link} to="/about"> <InfoIcon /> About Us</Button>
      <Button color="inherit" component={Link} to="/services"> <LocalTaxiIcon /> Services & Charges</Button>
      <Button color="inherit" component={Link} to="/contact"> <ContactMailIcon /> Contact Us</Button>
    </Toolbar>
  </AppBar>
);

const Footer = () => (
  <Box component="footer" sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center", padding: 2, marginTop: 4 }}>
    <Typography variant="body1">&copy; 2025 Driver Service. All rights reserved.</Typography>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 1 }}>
      <IconButton color="inherit" href="tel:+1234567890">
        <PhoneIcon />
      </IconButton>
      <IconButton color="inherit" href="mailto:support@driverservice.com">
        <EmailIcon />
      </IconButton>
    </Box>
  </Box>
);

const DriverBusiness = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default DriverBusiness;
