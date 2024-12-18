import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import productDescription from "../../data/productDescriptionData";
import productManufacturer from "../../data/productManufacturerData";
import ReviewSection from "./ReviewSection/ReviewSection";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function ProdDescription() {
  const [activeButton, setActiveButton] = useState("Description");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    if (activeButton === "Description") {
      return (
        <Box>
          <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px' }}>
            {productDescription.para1}
          </Typography>
          <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px' }}>
            {productDescription.para2}
          </Typography>
          <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px', paddingLeft: '40px' }}>
            <List>
              {productDescription.list.map((item, index) => (
                <ListItem key={index}><FiberManualRecordIcon sx={{fontSize: '10px', marginRight: '5px'}}/>{item}</ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      );
    } else if (activeButton === "Manufacturer") {
      return (
        <>
          <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px' }}>
            {productManufacturer.para1}
          </Typography>
          <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px' }}>
            {productManufacturer.para2}
          </Typography>
        </>
      );
    } else if (activeButton === "Review") {
      return (
        <Typography variant="body1" sx={{ color: '#909090', marginBottom: '20px', fontSize: '16px' }}>
          <ReviewSection />
        </Typography>
      );
    }
  };

  return (
    <Box sx={{ marginTop: '98px', display: 'flex', flexDirection: 'column', marginBottom: '196px' }}>
      <Box sx={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
        {["Description", "Manufacturer", "Review"].map((buttonName) => (
          <Button
            variant="text"
            key={buttonName}
            onClick={() => handleButtonClick(buttonName)}
            sx={{
              boxShadow: 'none',
              fontSize: '12px',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: activeButton === buttonName ? '#616161' : '#f0f0f0',
              color: activeButton === buttonName ? '#fff' : '#909090',
              transition: 'all 0.5s ease',
              '&:hover': {
                backgroundColor: activeButton === buttonName ? '#616161' : '#f0f0f0',
                color: activeButton === buttonName ? '#fff' : '#909090',
                boxShadow: 'none',
              },
            }}
          >
            {buttonName}
          </Button>
        ))}
      </Box>

      <Box sx={{ border: '1px solid #dee2e6', padding: '28px' }}>
        {renderContent()}
      </Box>
    </Box>
  );
}
