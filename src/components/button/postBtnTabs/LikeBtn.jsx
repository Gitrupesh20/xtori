import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useState } from "react";
export default function LikeBtn({ Likes, mark }) {
  const [isActive, setIsActive] = useState(mark);
  const [count, setCount] = useState(Likes);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    isActive ? setCount(Likes) : setCount(count + 1);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <div className={isHover ? "button_pop" : "button_pop_block"}>Like</div>
        {isActive ? (
          <FavoriteSharpIcon fontSize="medium" sx={{ color: "red" }} />
        ) : (
          <FavoriteSharpIcon
            sx={{ color: "rgb(251, 137, 137, 0.75)" }}
            fontSize="medium"
          />
        )}{" "}
        {count}
      </div>
    </>
  );
}
