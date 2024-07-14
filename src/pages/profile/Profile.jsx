import {
  Avatar,
  Box,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import imge from "../../assets/river.jpg";
import { FeedCard } from "../../components";
import { Post } from "../../assets/Data";
const Profile = () => {
  return (
    <>
      <div style={{ letterSpacing: "0.7px", marginBottom: "3rem" }}>
        <ImageList
          sx={{
            overflow: "hidden",
            m: "0",
            p: "0",
          }}
          cols={1}
        >
          <ImageListItem>
            <img src={imge} alt="" style={{ width: "100%", height: 300 }} />
          </ImageListItem>
        </ImageList>
        <Box
          sx={{
            position: "absolute",
            top: 240,
            display: "flex",
            padding: "10px",
          }}
        >
          <Avatar
            src={imge}
            alt="profile pic"
            sx={{
              width: 120,
              height: 120,
              border: "1.5px solid  rgba(119, 121, 239, 0.40)",
              boxShadow: 3, // Use a number from the predefined shadow levels (e.g., 1 to 24)
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 45,
              padding: "20px",
            }}
          >
            <Typography variant="p" fontWeight="500" lineHeight="10px">
              Rupesh Sharma
            </Typography>
            <Typography variant="p" fontWeight="400" fontSize="14px">
              @rupesh
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            padding: "5rem 0 5px 15px",
            margin: "0",
          }}
        >
          <p>A poet | Student | Men</p>
        </Box>
        <Divider />
        <div style={{ padding: "15px 30px 10px 30px" }}>
          <button
            style={{ marginRight: "1.5rem", width: "10rem", height: "2.5rem" }}
          >
            Story
          </button>
          <button
            style={{ marginRight: "1.5rem", width: "10rem", height: "2.5rem" }}
          >
            Contributions
          </button>
        </div>
        <Divider />
      </div>
      <List>
        {Post.map((obj, id) => (
          <>
            {" "}
            <Divider />
            <ListItem key={id}>
              <FeedCard PostDetails={obj} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export default Profile;
