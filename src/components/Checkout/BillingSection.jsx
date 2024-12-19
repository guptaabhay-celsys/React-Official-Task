import { Box} from "@mui/material";
import RegisterForm from "./RegisterForm";
import PaymentSection from "./PaymentSection"

export default function BillingSection() {

  return (
    <Box sx={{ display: "flex", gap: '20px', marginBottom: '226px' }}>
      <RegisterForm />
      <PaymentSection />
    </Box>
  );
}
