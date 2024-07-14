import { Box } from "@mui/material";
import LikeBtn from "./LikeBtn";
import { Contribute } from "./Contribute";
import { ShareBtn } from "./ShareBtn";
import { BookmarkBtn } from "./BookmarkBtn";

export const BtnTab = ({ details }) => {
  // console.log(details);
  const { Likes, contributes, bookmark, share } = details;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: [2, 2, 4],
        width: "max-content",
      }}
    >
      <LikeBtn Likes={Likes?.count} mark={Likes?.isLiked} />
      <Contribute contribute={contributes?.count} />
      <ShareBtn shareCount={share?.count} />
      <BookmarkBtn bookmarks={bookmark?.count} mark={bookmark?.isMark} />
    </Box>
  );
};
