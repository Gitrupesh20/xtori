import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Container, Avatar } from "@mui/material";
import {
  MdExplore,
  MdNotifications,
  MdGroups2,
  MdBookmarks,
  MdOutlineLogout,
} from "react-icons/md";

import img from "../../assets/p.jpg";

const Sidebar = () => {
  const txtStyle = {
    fontFamily: "var(font-family)",
    fontSize: "1.5rem",
    fontWeight: "450",
  };

  return (
    <>
      <div
        style={{
          padding: "4rem 2rem 0  5rem",
          display: "flex",
          flexDirection: "column",
          width: "15vw",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <p style={txtStyle}>
            {"   "}
            <AiFillHome /> &nbsp; Home
          </p>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <p style={txtStyle}>
            {" "}
            <MdExplore />
            &nbsp; Explore
          </p>
        </Link>
        <Link to={"/notifications"} style={{ textDecoration: "none" }}>
          <p style={txtStyle}>
            {" "}
            <MdNotifications /> &nbsp; Notifications
          </p>
        </Link>

        <Link to={"/communities "} style={{ textDecoration: "none" }}>
          <p style={txtStyle}>
            {" "}
            <MdGroups2 />
            &nbsp; Communities
          </p>
        </Link>
        <Link to={"/bookmarks"} style={{ textDecoration: "none" }}>
          <p style={txtStyle}>
            {" "}
            <MdBookmarks />
            &nbsp; Bookmarks
          </p>
        </Link>
      </div>

      <Container
        sx={{
          display: "flex",
          border: "1px solid rgba(0, 0, 0, 0.24)",
          borderRadius: "15px",
          width: "78%",
          padding: "0.5rem",
          mt: "6rem",
        }}
      >
        <Link to={`/u/${"username"}`} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex" }}>
            <Avatar
              sx={{
                marginRight: "1rem",
                marginTop: "3px",
                width: "3rem",
                height: "3rem",
                cursor: "pointer",
              }}
              src={img}
            />
            <div style={{ fontSize: "12px" }}>
              <p
                style={{
                  margin: "0",
                  fontFamily: "var(font-family)",
                  fontSize: "1rem",
                  fontWeight: "550",
                  cursor: "pointer",
                }}
              >
                Nmae
              </p>
              @username
            </div>
          </div>
        </Link>

        <MdOutlineLogout size={30} style={{ margin: "11px 0 0 3rem" }} />
      </Container>
    </>
  );
};

export default Sidebar;
