import { Box, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import AuthContext from "../../context/AuthContext";

type OrderItem = {
  order_id: number;
  product_name: string;
  total_price: number;
  quantity: number;
  order_date: string | Date;
  status: string;
};

export default function OrderedProducts({ cosmetic }: { cosmetic: React.CSSProperties }) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notification, setNotification] = useState({ open: false, message: "" });
  const authToken = localStorage.getItem("authToken");
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (userInfo?.id){
    const fetchOrderItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/products?userId=${userInfo.id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        setOrderItems(data.orders || []);
      } catch (error) {
        console.error("Error fetching order items:", error);
        setNotification({
          open: true,
          message: "Failed to fetch order items. Please try again later.",
        });
      } finally {
        setIsLoading(false); 
      }
    };

    if (authToken) {
      fetchOrderItems();
    } else {
      setIsLoading(false); 
    }
  }
  }, [authToken]);

  return (
    <Box>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <CircularProgress sx={{ color: '#88b8bc !important' }} />
        </Box>
      ) : orderItems.length > 0 ? (
        orderItems.map((item) => {
          const { order_id, product_name, total_price, quantity, order_date, status }: OrderItem = item;
          const formattedDate =
            typeof order_date === "string" ? order_date.split("T")[0] : order_date.toLocaleDateString();
          return (
            <Box
              key={order_id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid lightgray",
                padding: "10px 20px",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {product_name}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {quantity}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {currencyFormatter.format(total_price)}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {formattedDate}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat, Arial, sans-serif",
                  color: "#595959",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {status}
              </Typography>
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            fontFamily: "Roboto, Arial, sans-serif",
            textAlign: "center",
            color: "#808080",
          }}
        >
          No Orders Yet!
        </Typography>
      )}
    </Box>
  );
}