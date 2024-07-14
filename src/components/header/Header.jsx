import { Typography, Box, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Search } from "../search/Search";
export const Header = () => {
  const loc = useLocation();
  const getTitle = () => {
    const name = loc.pathname;
    switch (loc.pathname) {
      case "/":
        return "Home";
      case "/explore":
        return "Explore";
      case "/notifications":
        return "Notifications";
      case "/communities":
        return "Communities";
      case "/bookmarks":
        return "Bookmarks";
      case "/stories":
        return "Stories";
      default:
        return (
          name.split("/")[1][0].toUpperCase() +
          name.split("/")[1].substring(1).toLowerCase()
        );
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: ["100%", "100%", "41.9%"],
          height: "50px",
          padding: "15px",
          position: "fixed",
          ml: "1px",
          borderBottom: " 1px solid rgba(0, 0, 0, 0.24)",
          bgcolor: "hsla(0, 0%, 100%, 0.90);",
          zIndex: "2",
        }}
      >
        {getTitle() == "Explore" ? (
          <Search defaultValue={getTitle()} />
        ) : (
          <>
            {" "}
            <Typography variant="p" fontWeight={600} fontSize="25px">
              {getTitle()}
            </Typography>
            <Box sx={{ display: ["block", "block", "none"] }}>
              <Avatar
                sx={{
                  bgcolor: "blueviolet",
                  marginRight: "30px",
                  width: 45,
                  height: 45,
                }}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
