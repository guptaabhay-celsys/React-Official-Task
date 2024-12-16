import { useDispatch } from "react-redux"
import { setProducts } from "../store/productsSlice"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import image1 from '../assets/images/item-1.jpg'
import image2 from '../assets/images/item-2.jpg'
import image3 from '../assets/images/item-3.jpg'
import image4 from '../assets/images/item-4.jpg'
import image5 from '../assets/images/item-5.jpg'
import image6 from '../assets/images/item-6.jpg'
import image7 from '../assets/images/item-7.jpg'
import image8 from '../assets/images/item-8.jpg'
import image9 from '../assets/images/item-9.jpg'
import image10 from '../assets/images/item-10.jpg'
import image11 from '../assets/images/item-11.jpg'
import image12 from '../assets/images/item-12.jpg'
import image13 from '../assets/images/item-13.jpg'
import image14 from '../assets/images/item-14.jpg'
import image15 from '../assets/images/item-15.jpg'
import image16 from '../assets/images/item-16.jpg'

export default function ProductsDispatch(){
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products);

    useEffect(() => {
        const productData = [
          {
            "id": "p1",
            "name": "Women's Boots Shoes Maca",
            "price": "139.00",
            "image": image1
          },
          {
            "id": "p2",
            "name": "Women's minam meaghan",
            "price": "8.99",
            "image": image2
          },
          {
            "id": "p3",
            "name": "Men's taja commissioner",
            "price": "8.99",
            "image": image3
          },
          {
            "id": "p4",
            "name": "Russ Men's Blue Sneakers",
            "price": "8.99",
            "image": image4
          },
          {
            "id": "p5",
            "name": "Women's Boots Shoes",
            "price": "8.99",
            "image": image5
          },
          {
            "id": "p6",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image6
          },
          {
            "id": "p7",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image7
          },
          {
            "id": "p8",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image8
          },
          {
            "id": "p9",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image9
          },
          {
            "id": "p10",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image10
          },
          {
            "id": "p11",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image11
          },
          {
            "id": "p12",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image12
          },
          {
            "id": "p13",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image13
          },
          {
            "id": "p14",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image14
          },
          {
            "id": "p15",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image15
          },
          {
            "id": "p16",
            "name": "Women's Boots Shoes Maca",
            "price": "8.99",
            "image": image16
          }
          
        ]
    
        dispatch(setProducts(productData));
      }, [dispatch, products.length]);

      return null;
}