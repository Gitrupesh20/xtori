import { Avatar, Card, CardContent, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BtnTab } from "../button/postBtnTabs/BtnTab";

const FeedCard = ({ PostDetails, isFull }) => {
  const [maxHeight, setMaxHeight] = useState("auto");
  const cardRef = useRef(null);
  const { id, user, Time, Likes, contributes, bookmark, share, story } =
    PostDetails;
  useEffect(() => {
    if (cardRef.current && !isFull) {
      const cardHeight = cardRef.current.scrollHeight;
      setMaxHeight(cardHeight > 365 ? "365px" : "auto");
    } else {
      setMaxHeight("auto");
    }
  }, [story, isFull]);

  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          height: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardContent
          sx={{
            margin: "8px",
            padding: "0",
            position: "relative",
          }}
        >
          <Avatar
            alt="profile img"
            sx={{ width: 45, height: 45, bgcolor: "orange" }}
          />
        </CardContent>
        <CardContent sx={{ margin: "8px", padding: "0" }}>
          <Box>
            <Typography fontWeight={550} sx={{ display: "flex", gap: "8px" }}>
              {user?.username || "Rupesh Sharma "}
              <Typography component="span" fontWeight="normal">
                {Time || "10h"}
              </Typography>
            </Typography>{" "}
            <Typography fontSize={13}>{user?.userID || "@rupesh"}</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Link
              to={`/post/${id}`}
              style={{ textDecoration: "none" }}
              onClick={handleClick}
            >
              <div
                ref={cardRef}
                style={{ height: maxHeight, overflow: "clip" }}
              >
                <p>{story}</p>
              </div>
              {isFull || maxHeight == "auto" ? " " : <a>...See more</a>}
            </Link>
          </Box>
          <BtnTab details={{ Likes, contributes, bookmark, share }} />
        </CardContent>
      </Card>
    </>
  );
};

export default FeedCard;
