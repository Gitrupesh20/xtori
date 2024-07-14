import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useState } from "react";
import "./style.css";
export const BookmarkBtn = ({ bookmarks, mark }) => {
  const [isActive, setIsActive] = useState(mark || false);
  const [count, setCount] = useState(bookmarks || 0);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    isActive ? setCount(bookmarks || 0) : setCount(count + 1);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        {" "}
        <div className={isHover ? "button_pop" : "button_pop_block"}>
          Bookmark
        </div>
        {isActive ? (
          <BookmarkOutlinedIcon fontSize="medium" />
        ) : (
          <BookmarkBorderOutlinedIcon fontSize="medium" />
        )}{" "}
        {count}
      </div>
    </>
  );
};
