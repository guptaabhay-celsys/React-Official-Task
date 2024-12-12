import { Box, Typography, TableContainer, TableRow, TableCell, TextField, Grid } from "@mui/material";

export default function ContactForm() {
  return (
    <Box>
      <Box sx={{ padding: '28px', backgroundColor: 'lightgray', fontFamily: 'Montserrat, Arial, sans-serif' }}>
        <Typography variant="h4" color="initial">
          Get In Touch
        </Typography>
        <TableContainer>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">First Name</Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    placeholder="Enter your first name"
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      border: 'none',
                    }}
                  />
                </TableCell>
              </TableRow>
            </Grid>
            <Grid item xs={6}>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">Last Name</Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    fullWidth
                    placeholder="Enter your last name"
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      border: 'none',
                    }}
                  />
                </TableCell>
              </TableRow>
            </Grid>
          </Grid>

          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="body1">Email</Typography>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  border: 'none',
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="body1">Subject</Typography>
              <TextField
                fullWidth
                placeholder="Enter the subject"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  border: 'none',
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="body1">Message</Typography>
              <TextField
                fullWidth
                placeholder="Write your message"
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  border: 'none',
                }}
                multiline
                rows={4}
              />
            </TableCell>
          </TableRow>
        </TableContainer>
      </Box>
    </Box>
  );
}
