import { Box } from "@mui/material";
import menCategoryImage from '../../assets/images/img_bg_3.jpg';
import womenCategoryImage from '../../assets/images/item-10.jpg';
import CategoryCard from '../../util/CategoryCard';

export default function CategoryCards() {
  const categoryData = [
    {
      title: "Shop Men's Collection",
      link: "/men",
      image: menCategoryImage,
    },
    {
      title: "Shop Women's Collection",
      link: "/women",
      image: womenCategoryImage,
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '98px 15px',
        boxSizing: 'border-box',
      }}
    >
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          link={category.link}
          image={category.image}
        />
      ))}
    </Box>
  );
}