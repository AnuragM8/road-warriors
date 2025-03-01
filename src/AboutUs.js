import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SecurityIcon from '@mui/icons-material/Security';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const AboutUs = () => (
  <Container>
    <Typography variant="h4" gutterBottom>About Us</Typography>
    <Typography paragraph>
      We provide professional driver services with safety and comfort in mind. Our team is dedicated to offering the best service in Hyderabad, available 24/7.
    </Typography>

    <Box mt={4}>
      <Typography variant="h5" gutterBottom>About the Owner</Typography>
      <Typography paragraph>
        Our founder, John Doe, has over 20 years of experience in the transportation industry. His vision is to provide reliable and safe driver services to everyone in Hyderabad.
      </Typography>
    </Box>

    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Dedicated Drivers</Typography>
      <Typography paragraph>
        Our drivers are professionally trained and background-checked to ensure your safety and comfort. They are courteous, punctual, and knowledgeable about the city routes.
      </Typography>
    </Box>

    <Box mt={4} sx={{ 
      backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/026/563/232/non_2x/car-travel-route-car-travel-path-icon-a-car-path-in-the-form-of-a-dotted-line-with-a-map-pin-icon-vector.jpg)', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      padding: '20px', 
      borderRadius: '8px',
      minHeight: '400px'
    }}>
      <Typography variant="h5" gutterBottom>Why Us?</Typography>
      <Typography paragraph>
        We are Hyderabad's best service for several reasons:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="24/7 availability" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Professional and courteous drivers" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CurrencyRupeeIcon />
          </ListItemIcon>
          <ListItemText primary="Affordable rates" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Safe and comfortable rides" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FlashOnIcon />
          </ListItemIcon>
          <ListItemText primary="Instant service availability" />
        </ListItem>
      </List>
    </Box>

    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Marketing Quote</Typography>
      <Typography paragraph>
        "Your safety and comfort are our top priorities. Experience the best driver services in Hyderabad with us!"
      </Typography>
    </Box>

    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Service Highlights</Typography>
      <Typography paragraph>
        We offer a range of services to meet your needs:
      </Typography>
      <ul>
        <li>Hourly and daily driver services</li>
        <li>Outstation trips</li>
        <li>Corporate driver services</li>
        <li>Event transportation</li>
      </ul>
    </Box>
  </Container>
);

export default AboutUs;
