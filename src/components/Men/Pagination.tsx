import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <Stack spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px'}}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
}