import { List, ListItem, Box, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PersonIcon from "@mui/icons-material/Person";
const Notification = () => {
  const count = 10;
  const arr = ["Likes", "contribute", "follow", "Likes"];
  //dynamically change the Icon for notification
  function getIcon(iconName) {
    switch (iconName) {
      case "Likes":
        return (
          <FavoriteIcon
            sx={{ color: "rgb(251, 137, 137,2)" }}
            fontSize="large"
          />
        );
      case "contribute":
        return (
          <TipsAndUpdatesIcon
            sx={{ color: "rgba(119, 121, 239, 0.367)" }}
            fontSize="large"
          />
        );
      case "follow":
        return (
          <PersonIcon
            sx={{ color: "rgba(119, 121, 239, 0.367)" }}
            fontSize="large"
          />
        );
    }
  }
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <List>
          {arr.map((val, i) => (
            <>
              <Divider component="li" key={i + 5} />
              <ListItem key={i} sx={{ gap: 1.5, height: "70px" }}>
                {getIcon(val)}
                <div>
                  <p>
                    {" "}
                    {val == "Likes"
                      ? `rupesh ${
                          count > 2 ? `and ${count} peoples` : ""
                        } likes your story.`
                      : val == "contribute"
                      ? `rupesh ${
                          count > 2 ? `and ${count} peoples` : ""
                        } contribute to your story.`
                      : `rupesh ${
                          count > 2 ? `${count} and peoples` : ""
                        } follow you.`}{" "}
                  </p>
                </div>
              </ListItem>
            </>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Notification;
