import { Box, Typography, IconButton } from "@mui/material";
import relatedProductsData from "../../data/relatedProductsData";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState } from "react";
import ShopButton from "../../util/Button";
import { currencyFormatter } from '../../util/formatting.js';
import ProdSize from "../../util/ProdSize";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ProductDetail() {
    const [activeStep, setActiveStep] = useState(0);
    const [prodCount, setProdCount] = useState(0);

    const product = relatedProductsData[activeStep]; 

    const handleProductClick = (index) => {
        setActiveStep(index);
    };

    return (
        <Box sx={{ display: 'flex', gap: '30px' }}>
            <Box sx={{ flex: '2.5', position: 'relative' }}>
                <Box sx={{ position: 'relative', width: '100%', height: '760px' }}>
                    {relatedProductsData.map((product, index) => (
                    <Box
                        key={index}
                        sx={{
                        width: '100%',
                        height: '750px !important',
                        border: '1px solid lightgray',
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute', 
                        top: 0, 
                        left: 0,
                        transform: `scale(${activeStep === index ? 1 : 0.95})`,
                        opacity: activeStep === index ? 1 : 0, 
                        pointerEvents: activeStep === index ? 'auto' : 'none', 
                        transition: 'transform 1s ease, opacity 0.1s ease', 
                        }}
                    ></Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {relatedProductsData.map((_, index) => (
                    <IconButton
                        key={index}
                        onClick={() => handleProductClick(index)}
                        sx={{
                        margin: '0 5px',
                        height: '10px !important',
                        width: '10px',
                        borderRadius: '50%',
                        backgroundColor: activeStep === index ? 'gray' : 'lightgray',
                        '&:hover': {
                            backgroundColor: 'gray',
                        },
                        padding: '4px', 
                        }}
                    />
                    ))}
                </Box>
                </Box>




            <Box sx={{ flex: '1', padding: '0 0 0 28px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            marginBottom: '8px',
                            fontSize: '20px',
                            fontFamily: 'Rokkitt, Georgia, serif',
                            textTransform: 'uppercase',
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ marginBottom: '4px', fontSize: '18px' }}
                    >
                        {currencyFormatter.format(product.price)}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#b3b3b3',
                            fontSize: '13px',
                            marginBottom: '20px',
                        }}
                    >
                        <StarIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        <StarIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        <StarIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        <StarIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        <StarHalfIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        (74 Ratings)
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '20px' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '15px',
                            letterSpacing: '0.5px',
                            lineHeight: '1.8',
                            color: '#909090',
                            fontFamily: 'Montserrat, Arial, sans-serif',
                        }}
                    >
                        Even the all-powerful Pointing has no control about the
                        blind texts. It is an almost unorthographic life. One day,
                        however, a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                    </Typography>
                </Box>

                <Box>
                    <ProdSize gap="2px" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', marginBottom: '24px' }}>
                    <Box
                        sx={{
                            color: '#000',
                            padding: '8px',
                            backgroundColor: 'lightgray',
                            borderRadius: '1px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            transition: 'background-color 0.5s ease',
                            '&:hover': { backgroundColor: 'gray' },
                        }}
                        onClick={() => setProdCount((prevCount) => Math.max(prevCount - 1, 0))}
                    >
                        -
                    </Box>

                    <Box
                        sx={{
                            width: '150px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #e6e6e6',
                            borderRadius: '1px',
                            fontSize: '16px',
                            padding: '6px 12px',
                            color: '#616161'
                        }}
                    >
                        {prodCount}
                    </Box>

                    <Box
                        sx={{
                            color: '#000',
                            padding: '8px',
                            backgroundColor: 'lightgray',
                            borderRadius: '1px',
                            width: '40px !important',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            transition: 'background-color 0.5s ease',
                            '&:hover': { backgroundColor: 'gray' },
                        }}
                        onClick={() => setProdCount((prevCount) => prevCount + 1)}
                    >
                        +
                    </Box>
                </Box>

                <ShopButton
                    cosmetic={{
                        padding: '8px 20px',
                        borderRadius: '4px',
                        textTransform: 'none',
                        letterSpacing: '0.5px',
                    }}
                >
                    <ShoppingCartOutlinedIcon />
                    Add to Cart
                </ShopButton>
            </Box>
        </Box>
    );
}
