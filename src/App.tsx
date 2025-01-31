import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./store/productsSlice";
import ProtectedRoute from "./util/ProtectedRoute";
import { Box, CircularProgress } from "@mui/material";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import MensPage from "./pages/MensPage";
import WomensPage from "./pages/WomensPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./util/NotFoundPage";
import AuthContext from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from './pages/OrdersPage'

type Product = {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image_url: string;
  description: string;
  gender: string;
  available_sizes: number[];
  colors_available: string[];
  material: string;
  technology: string;
  brand_name: string;
  category: string;
}

const decodeJwt = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

function App() {
  const dispatch = useDispatch();
  const { setUserInfo } = useContext(AuthContext); // You will use setUserInfo to store user data globally.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      const decodedToken = decodeJwt(token);

      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        setIsAuthenticated(true);
        setUserInfo({
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
        }); // Storing user info in the global context.
      } else {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setIsLoading(false);
  }, [token, setUserInfo]); // Dependencies updated to include setUserInfo to prevent stale closures.

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress sx={{ color: "#88b8bc" }} />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="signup" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="men" element={<MensPage />} />
          <Route path="women" element={<WomensPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-complete" element={<OrderCompletePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route
            path="product-details/:Prodid"
            element={<ProductDetailsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
