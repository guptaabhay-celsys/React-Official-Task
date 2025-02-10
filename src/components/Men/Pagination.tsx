import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationProps } from '../../types';

export default function PaginationOutlined({ handlePageChange, count }: PaginationProps) {
  return (
    <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
      <Pagination count={count} variant="outlined" onChange={handlePageChange} />
    </Stack>
  );
}
