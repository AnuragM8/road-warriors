import React from "react";
import { Container, Card, CardContent, Typography, Box } from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";

const ContactUs = () => (
  <Container sx={{height: "100%"}}>
    <Typography variant="h4" gutterBottom>Contact Us</Typography>
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', marginBottom: 2 }}>
      <Box sx={{ flex: 1, marginRight: { md: 2, xs: 0 }, marginBottom: { xs: 2, md: 0 } }}>
        
      <Box sx={{ display: 'flex', alignItems: 'center', height: 'auto', marginTop: 2 }}>
          <img src="https://static.vecteezy.com/system/resources/previews/026/563/232/non_2x/car-travel-route-car-travel-path-icon-a-car-path-in-the-form-of-a-dotted-line-with-a-map-pin-icon-vector.jpg" alt="Contact Us" style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }} />
        </Box>
        
        <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ marginRight: 1 }} />
                <Typography>Phone: +1234567890</Typography>
              </a>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <a href="mailto:support@driverservice.com" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ marginRight: 1 }} />
                <Typography>Email: support@driverservice.com</Typography>
              </a>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://www.google.com/maps?q=123+Driver+Street,+City,+Country" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ marginRight: 1 }} />
                <Typography>Address: 123 Driver Street, City, Country</Typography>
              </a>
            </Box>
          </CardContent>
        </Card>
        
        <Box sx={{ width: "100%", height: "400px", marginTop: 2 }}>
          <iframe
            title="Google Map Location"
            width="100%"
            height="100%" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890!2d78.5102422!3d17.3957866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c81899c077%3A0x9bc0764ee404320e!2sBagh%20Amberpet%2C%20Amberpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            allowFullScreen
          />
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSew1bB2cyLN8Vw8ywrpEVvwDl6u9lTQGlrIYTB9RXDNp-E6DA/viewform?embedded=true" width="550" height="1000px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Box>
    </Box>
  </Container>
);

export default ContactUs;
