import SwapCallsOutlinedIcon from "@mui/icons-material/SwapCallsOutlined";
import { useState } from "react";
export const ShareBtn = ({ shareCount }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      <div className={isHover ? "button_pop" : "button_pop_block"}>Share</div>{" "}
      <SwapCallsOutlinedIcon fontSize="medium" /> {shareCount}
    </div>
  );
};
