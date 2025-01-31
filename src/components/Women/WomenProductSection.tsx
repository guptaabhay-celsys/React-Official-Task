import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Grid, Checkbox, FormControlLabel } from '@mui/material';
import PaginationOutlined from "../Men/Pagination";
import MultiActionAreaCard from "../../util/ProductCards";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/productsSlice';

type Filter = {
  id: string;
  name: string;
  items?: string[];
  subcategories?: { items: string[] }[];
};

type FilterState = {
  type: string;
  items: string[];
};

type Product = {
  gender: string;
  brand_name: string;
  available_sizes: number[];
  colors_available: string[];
  material: string;
  technology: string;
};

export const filters: Filter[] = [
  {
    id: "brand_name",
    name: 'Brand',
    items: ["Nike", "Adidas", "Merrel", "Gucci", "Skechers"],
  },
  {
    id: "size",
    name: 'Size',
    subcategories: [
      {
        items: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"],
      },
    ],
  },
  {
    id: "color",
    name: 'Color',
    items: ["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"],
  },
  {
    id: "material",
    name: 'Material',
    items: ["Leather", "Suede"],
  },
  {
    id: "technology",
    name: "Technology",
    items: ["BioBevel", "Groove", "FlexBevel"],
  },
];

export default function MenProductSection() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const products = useSelector((state: RootState) => state.products.products);
  const [activeFilters, setActiveFilters] = useState<FilterState[]>([
    { type: 'brand_name', items: [] },
    { type: 'color', items: [] },
    { type: 'size', items: [] },
    { type: 'technology', items: [] },
    { type: 'material', items: [] },
  ]);
  const womenProducts = products.filter((product: Product) => product.gender === 'Female');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (filterType: string, item: string): void => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = [...prevFilters];
      const filter = updatedFilters.find((f) => f.type === filterType);
      if (filter) {
        if (filter.items.includes(item)) {
          filter.items = filter.items.filter((selectedItem) => selectedItem !== item);
        } else {
          filter.items.push(item);
        }
      }
      return updatedFilters;
    });

    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  };

  const filteredProducts = womenProducts.filter((product: Product) => {
    return activeFilters.every((filter: FilterState) => {
      if (filter.items.length === 0) return true;

      switch (filter.type) {
        case 'brand_name':
          return filter.items.includes(product.brand_name);
        case 'size':
          return product.available_sizes.some((size) => filter.items.includes(size.toString()));
        case 'color':
          return product.colors_available.some((color) => filter.items.includes(color));
        case 'material':
          return filter.items.includes(product.material);
        case 'technology':
          return filter.items.includes(product.technology);
        default:
          return true;
      }
    });
  });

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "30px", margin: '0 auto 98px auto' }}>
        <Box sx={{ flex: "1 1 25%", maxWidth: "300px" }}>
          <Box sx={{ display: 'flex', position: 'relative', boxSizing: 'border-box', alignItems: 'flex-start', justifyContent: 'flex-start', flex: '1' }}>
            <Box sx={{ width: '100%', textAlign: 'left', letterSpacing: '1px', lineHeight: '1.6' }}>
              {filters.map((filter) => (
                <Box key={filter.id} sx={{ border: '1px solid lightgray', marginBottom: '6px', padding: '14px', borderRadius: '2px', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  <Typography variant="h6" sx={{ fontSize: '16px', marginBottom: '8px', textTransform: 'uppercase' }}>
                    {filter.name}
                  </Typography>
                  {filter.subcategories ? (
                    filter.subcategories.map((subcategory, index) => (
                      <Box key={index} sx={{ margin: '40px 0 24px 0' }}>
                        <Grid container spacing={0.5}>
                          {subcategory.items.map((item, index) => (
                            <Grid item xs={3} key={index}>
                              <Box
                                onClick={() => handleSelect(filter.id, item)}
                                sx={{
                                  color: selectedItems.includes(item) ? '#fff' : '#909090',
                                  backgroundColor: selectedItems.includes(item) ? '#909090' : '#f0f0f0',
                                  padding: '8px',
                                  borderRadius: '1px',
                                  width: '40px',
                                  height: '40px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '14px',
                                  cursor: 'pointer',
                                  transition: 'background-color 0.5s ease, color 0.5s ease',
                                  '&:hover': {
                                    backgroundColor: selectedItems.includes(item) ? '#666' : '#ddd',
                                    color: 'white',
                                  },
                                }}
                              >
                                {item}
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    ))
                  ) : (
                    <List>
                      {filter.items?.map((item, index) => (
                        <ListItem key={index} sx={{ padding: '4px 0', color: '#909090', backgroundColor: 'transparent', fontSize: '14px', cursor: 'pointer' }}>
                          <FormControlLabel
                            control={<Checkbox checked={selectedItems.includes(item)} sx={{ color: '#909090 !important', '&.Mui-checked': { color: '#909090' } }} />}
                            label={item}
                            onChange={() => handleSelect(filter.id, item)}
                            sx={{
                              marginRight: '10px',
                              '& .MuiTypography-root': {
                                color: selectedItems.includes(item) ? '#000' : '#909090',
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 75%" }}>
          <MultiActionAreaCard
            style={{}}
            menStyle={{}}
            navigationType={undefined}
            cosmetic={{}}
            text=""
            currentPage={currentPage}
            filterWomenProducts={filteredProducts} filterMenProducts={[]}          />
        </Box>
      </Box>

      <PaginationOutlined handlePageChange={handlePageChange} count={Math.ceil(filteredProducts.length / 6)} />
    </>
  );
}
