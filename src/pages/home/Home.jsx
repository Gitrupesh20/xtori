import { FeedCard } from "../../components";
import { Post } from "../../assets/Data";
import { List, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";

const Home = () => {
  return (
    <>
      <List sx={{ marginTop: "100px" }}>
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

export default Home;
