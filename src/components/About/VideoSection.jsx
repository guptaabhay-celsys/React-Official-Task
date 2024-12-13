import { Grid, Box, Typography, IconButton, Dialog } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VideoThumbnail from "../../assets/Other Images/Video-Thumbnail.jpg";
import { useState } from "react";
import aboutData from "../../data/aboutSectionData";
import promoVideo from '../../assets/nike-ads.mp4'

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} alignItems="start">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "400px",
              paddingBottom: "56.25%",
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: 0.9, 
              },
              "&:hover .play-button": {
                transform: "translate(-50%, -50%) scale(1.3)", 
              },
            }}
          >
            <img
              src={VideoThumbnail}
              alt="Video Thumbnail"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                opacity: 0,
                transition: "opacity 0.5s ease",
              }}
            />
            <IconButton
              onClick={handleOpen}
              className="play-button"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#88c8bc",
                color: "white",
                transition: "transform 0.5s ease",
                "&:hover": {
                  backgroundColor: "#88c8bc",
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: "40px" }} />
            </IconButton>

          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: "300",
              fontSize: "32px",
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "1px",
              paddingLeft: "20px",
            }}
          >
            {aboutData.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "300",
              fontSize: "16px",
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "1px",
              color: "#595959",
              paddingLeft: "20px",
              lineHeight: "1.4",
            }}
          >
            {aboutData.paragraph1}
          </Typography>
          <br />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "300",
              fontSize: "16px",
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "1px",
              color: "#595959",
              paddingLeft: "20px",
              lineHeight: "1.4",
            }}
          >
            {aboutData.paragraph2}
          </Typography>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "black",
            borderRadius: "8px",
          },
        }}
      >
        <Box sx={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={promoVideo}
            title="Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
}
