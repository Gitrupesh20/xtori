import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { useState } from "react";
import "./style.css";

export const Contribute = ({ contribute }) => {
  const [count, setCount] = useState(contribute || 0);
  const [isHover, setIsHover] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      {" "}
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
        <div className={isHover ? "button_pop" : "button_pop_block"}>
          Contribute
        </div>{" "}
        <TipsAndUpdatesOutlinedIcon fontSize="medium" />
        {count}
      </div>
    </>
  );
};
