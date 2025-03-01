import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, TextField, Button, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Box, Card, CardContent, Grow, IconButton, Collapse } from "@mui/material";
import { Add, Remove, Delete, AttachMoney } from "@mui/icons-material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const minPrice = 500;
const additionalPrice = 100;  
const minHours = 4;
const outStationBasePrice = 1400;
const foodCharges = 200; // New property

const Services = () => {
  const [hours, setHours] = useState(minHours);
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(minPrice);
  const [tabValue, setTabValue] = useState(0);
  const [customDays, setCustomDays] = useState([{ hours: minHours }]);
  const [customType, setCustomType] = useState('local');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCustomDayChange = (index, value) => {
    const newCustomDays = [...customDays];
    newCustomDays[index].hours = value;
    setCustomDays(newCustomDays);
  };

  const addCustomDay = () => {
    setCustomDays([...customDays, { hours: minHours }]);
  };

  const removeCustomDay = (index) => {
    const newCustomDays = customDays.filter((_, i) => i !== index);
    setCustomDays(newCustomDays);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    console.log('Mouse Leave');
    setHoveredIndex(null);
  };

  const calculateCharges = (hours, days, isOutStation) => {
    let dailyTotal;
    if (isOutStation) {
      dailyTotal = outStationBasePrice + (hours - minHours) * additionalPrice + foodCharges; // Updated calculation
    } else {
      if (hours <= minHours) {
        dailyTotal = minPrice;
      } else {
        dailyTotal = minPrice + (hours - minHours) * additionalPrice;
      }
    }
    return dailyTotal * days;
  };

  const calculateCustomCharges = () => {
    let total = 0;
    customDays.forEach(day => {
      total += calculateCharges(day.hours, 1, customType === 'outStation');
    });
    setTotal(total);
  };

  useEffect(() => {
    if (tabValue === 2) {
      calculateCustomCharges();
    } else {
      setTotal(calculateCharges(hours, days, tabValue === 1));
    }
  }, [hours, days, tabValue, customDays, customType]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">Services & Charges</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grow in={true}>
            <Card key={tabValue}>
              <CardContent>
                <Typography variant="h6">Service Information</Typography>
                <Typography>We provide hourly and daily driver services at affordable rates, charging only for the hours serviced on that day, ensuring customer satisfaction.</Typography>
                <Typography>While we offer instant service availability, we recommend booking a day in advance for a seamless and hassle-free experience.</Typography>
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Service</TableCell>
                        <TableCell>Charges</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Minimum - For 4 Hours</TableCell>
                        <TableCell>Rs. 500/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>For Every Extra Hour</TableCell>
                        <TableCell>Rs. 100/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>For 8 Hours</TableCell>
                        <TableCell>Rs. 900/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>For 12 Hours</TableCell>
                        <TableCell>Rs. 1300/-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Out of Station/City - 12 Hours</TableCell>
                        <TableCell>Rs. 1400/- + Food</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} aria-label="service type tabs">
              <Tab label="Local" />
              <Tab label="Out of Station" />
              <Tab label="Custom Local" />
            </Tabs>
          </Box>
          <Grow in={true}>
            <Card key={`calculator-${tabValue}`}>
              <CardContent>
                <Typography variant="h6">Calculator</Typography>
                {tabValue === 2 ? (
                  <>
                    <RadioGroup
                      row
                      value={customType}
                      onChange={(e) => setCustomType(e.target.value)}
                      style={{ marginTop: '20px' }}
                    >
                      <FormControlLabel value="local" control={<Radio />} label="Local" />
                      <FormControlLabel value="outStation" control={<Radio />} label="Out of Station" />
                    </RadioGroup>
                    {customDays.map((day, index) => (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        style={{ marginTop: '20px', position: 'relative', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Box 
                        display="flex"
                        alignItems="center"
                        style={{ width: hoveredIndex === index ? '80%' : '100%', transition: 'width 0.3s' }}>
                          <IconButton onClick={() => handleCustomDayChange(index, day.hours > 0 ? day.hours - 1 : 0)}>
                            <Remove />
                          </IconButton>
                          <TextField
                            label={`Enter hours for Day ${index + 1}`}
                            type="number"
                            value={day.hours}
                            onChange={(e) => handleCustomDayChange(index, e.target.value)}
                            fullWidth
                            style={{ margin: '0 10px' }}
                          />
                          <IconButton onClick={() => handleCustomDayChange(index, day.hours < 24 ? day.hours + 1 : 24)}>
                            <Add />
                          </IconButton>
                          <IconButton onClick={() => removeCustomDay(index)}>
                            <Delete />
                          </IconButton>
                        </Box>
                        <Box
                          position="absolute"
                          right={0}
                          bgcolor={hoveredIndex===index ? "rgba(0, 0, 0, 0.7)":"transparent"}
                          color="white"
                          p={1}
                          borderRadius="4px"
                          width={hoveredIndex === index ? '20%' : '0%'}
                          style={{ transition: 'width 0.3s' }}
                        >
                          Rs. {calculateCharges(day.hours, 1, customType === 'outStation')}
                        </Box>
                      </Box>
                    ))}
                    <Button onClick={addCustomDay} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                      Add Day
                    </Button>
                  </>
                ) : (
                  <>
                    <Grow in={true} timeout={150}>
                      <Slider
                        value={hours}
                        onChange={(e, newValue) => setHours(newValue)}
                        aria-labelledby="continuous-slider"
                        min={0}
                        max={24}
                        valueLabelDisplay="auto"
                        style={{ marginTop: '20px' }}
                      />
                    </Grow>
                    <Grow in={true} timeout={300}>
                      <Box display="flex" alignItems="center" style={{ marginTop: '20px' }}>
                        <IconButton onClick={() => setHours(hours > 0 ? hours - 1 : 0)}>
                          <Remove />
                        </IconButton>
                        <TextField
                          label="Enter hours per Day"
                          type="number"
                          value={hours}
                          onChange={(e) => setHours(e.target.value)}
                          fullWidth
                          style={{ margin: '0 10px' }}
                        />
                        <IconButton onClick={() => setHours(hours < 24 ? hours + 1 : 24)}>
                          <Add />
                        </IconButton>
                      </Box>
                    </Grow>
                    <Grow in={true} timeout={450}>
                      <Box display="flex" alignItems="center" style={{ marginTop: '20px' }}>
                        <IconButton onClick={() => setDays(days > 1 ? days - 1 : 1)}>
                          <Remove />
                        </IconButton>
                        <TextField
                          label="Enter number of Days"
                          type="number"
                          value={days}
                          onChange={(e) => setDays(e.target.value)}
                          fullWidth
                          style={{ margin: '0 10px' }}
                        />
                        <IconButton onClick={() => setDays(days + 1)}>
                          <Add />
                        </IconButton>
                      </Box>
                    </Grow>
                  </>
                )}
                <Grow in={true} timeout={600}>
                  <Typography variant="h6" style={{ marginTop: '20px' }}>Charges for {days} Day(s): {total}</Typography>
                </Grow>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );
};

// Add CSS for animation
const styles = `
@keyframes collapseIn {
  from {
    width: 0;
  }
  to {
    width: 90%;
  }
}
`;

export default Services;
