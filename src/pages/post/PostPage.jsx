import { FeedCard } from "../../components";
import { Post } from "../../assets/Data";
import { useParams } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
export const PostPage = () => {
  const { id } = useParams();
  console.log(Post.find((obj) => obj.id == id));

  return (
    <>
      {" "}
      <List
        sx={{
          padding: 0,
          mb: "2rem",
          marginTop: "100px",
        }}
      >
        <ListItem sx={{ ml: "1px", pl: 0 }}>
          <FeedCard
            PostDetails={Post.find((obj) => obj.id == id)}
            isFull={true}
          />
        </ListItem>

        <Divider component="li" />
        <ListItem>{`2 jan 2023`}</ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start" sx={{}}>
          <ListItemAvatar>
            <Avatar
              alt="profile img"
              sx={{ bgcolor: "olivedrab", width: 44, height: 44 }}
            />
          </ListItemAvatar>
          <ListItemText />
        </ListItem>
        <Divider component="li" />
        <ListItem></ListItem>
        {Post.map((obj, i) => (
          <>
            <Divider component="li" />
            <ListItem key={i}>
              {" "}
              <FeedCard PostDetails={obj} isFull={false} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};
