import {
  List,
  Box,
  ListItem,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { storyCollection } from "../../assets/Data";
import image from "../../assets/p.jpg";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

function Popular() {
  return (
    <>
      <Typography
        variant="h5"
        fontWeight="650"
        sx={{
          letterSpacing: "1.2px",
          paddingX: "15px",
          paddingY: "10px",
          marginTop: "100px",
        }}
      >
        Popular
      </Typography>
      <List>
        {storyCollection.map((val, key) => (
          <>
            <Divider component="li" key={key + 1} />{" "}
            <ListItem
              key={key}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "left",
                height: "70px",
                gap: 0.5,
              }}
            >
              <Typography
                fontWeight="500"
                fontSize="17px"
                variant="p"
              >{`${val.title} `}</Typography>{" "}
              <Typography variant="p" fontSize="10px" sx={{ paddingX: "5px" }}>
                {`${val.totalStories / 1000}k stories`}
              </Typography>
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
}
function FoundUser({ foundUsers }) {
  return (
    <>
      <List>
        {foundUsers.length < 1 ? (
          <ListItem
            sx={{
              padding: "0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonSearchIcon
              sx={{ color: "rgba(119, 121, 239, 0.9)", fontSize: "5rem" }}
            />
            <h4>No user found</h4>
          </ListItem>
        ) : (
          <>
            {foundUsers.map((user, key) => (
              <>
                <Divider component="li" key={key + 1} />{" "}
                <ListItem
                  key={key}
                  sx={{
                    height: "70px",
                    gap: 1.5,
                  }}
                >
                  <Avatar
                    sx={{ height: 45, width: 45 }}
                    src={user.profilePic || image}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      m: "10px",
                    }}
                  >
                    <Typography fontWeight="500" fontSize="17px">
                      {`${user.usename || "Rupesh Sharma"}  `}
                    </Typography>{" "}
                    <Typography
                      variant="p"
                      fontSize="13px"
                      sx={{ paddingX: "2px", m: "0" }}
                    >
                      {`${user.userID || "@rursharma"}`}
                    </Typography>
                  </div>
                </ListItem>
              </>
            ))}
            <Divider component="li" />{" "}
          </>
        )}
      </List>
    </>
  );
}
const Explore = () => {
  //check wheather user enter for search for not
  const [isEntered, setIsEntered] = useState(false);
  const user = [];

  return (
    <>
      <Box
        sx={{
          padding: 0,
          m: "0",
        }}
      >
        {" "}
        {isEntered ? <FoundUser foundUsers={user} /> : <Popular />}
      </Box>
    </>
  );
};

export default Explore;
