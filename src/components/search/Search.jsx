import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export const Search = ({ defaultValue }) => {
  const [searchItem, setSearchItem] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(searchItem);
  };
  return (
    <>
      <form
        type="txt"
        style={{
          border: " 1px solid rgba(0, 0, 0, 0.24)",
          width: "90%",
          height: "30px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          gap: 15,
          padding: "10px",
        }}
        onSubmit={handlesubmit}
      >
        <SearchIcon sx={{}} fontSize="medium" />
        <input
          type="text"
          placeholder={defaultValue}
          style={{
            all: "inherit",
            border: "none",
            fontSize: "1rem",
          }}
          name="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
    </>
  );
};
