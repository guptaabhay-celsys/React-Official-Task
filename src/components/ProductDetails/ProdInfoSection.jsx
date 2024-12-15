import { Box, Typography } from "@mui/material";
import relatedProductsData from "../../data/relatedProductsData";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState } from "react";
import ShopButton from "../../util/Button";
import { currencyFormatter } from '../../util/formatting.js';
import ProdSize from "../../util/ProdSize";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ProductDetail() {
    const product = relatedProductsData[0];
    const [prodCount, setProdCount] = useState(0);

    return (
        <Box sx={{ display: 'flex', gap: '30px' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '650px',
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    flex: '2',
                }}
            ></Box>

            <Box sx={{ flex: '1', padding: '0 28px' }}>
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
                        <StarIcon
                            sx={{
                                color: '#616161',
                                verticalAlign: 'middle',
                                fontSize: '16px',
                            }}
                        />
                        <StarIcon
                            sx={{
                                color: '#616161',
                                verticalAlign: 'middle',
                                fontSize: '16px',
                            }}
                        />
                        <StarIcon
                            sx={{
                                color: '#616161',
                                verticalAlign: 'middle',
                                fontSize: '16px',
                            }}
                        />
                        <StarIcon
                            sx={{
                                color: '#616161',
                                verticalAlign: 'middle',
                                fontSize: '16px',
                            }}
                        />
                        <StarHalfIcon
                            sx={{
                                color: '#616161',
                                verticalAlign: 'middle',
                                fontSize: '16px',
                            }}
                        />
                        (74 Ratings)
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: '20px' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '16px',
                            letterSpacing: '0.5px',
                            lineHeight: '1.8',
                            color: '#909090',
                            fontFamily: 'Montserrat, Arial, sans-serif',
                        }}
                    >
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
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
                            '&:hover': {
                                backgroundColor: 'gray',
                            },
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
                            '&:hover': {
                                backgroundColor: 'gray',
                            },
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
