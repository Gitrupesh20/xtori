import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LogIn,
  Home,
  SignUp,
  Sidebar,
  PostPage,
  Explore,
  Notification,
  Profile,
} from "./pages";
import { Box } from "@mui/material";
import { Header } from "./components";
const App = () => {
  return (
    <Router>
      {/*       <>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />} />
        </Routes>
      </> */}
      <Box
        sx={{
          display: "flex",
          gap: "2px",
          margin: ["0", "0", "0 2rem"],
        }}
      >
        <Box
          sx={{
            display: ["none", "none", "block"],
            height: "100vh",
            borderRight: "1px solid rgba(0, 0, 0, 0.24)",
            padding: "10px",
            position: "fixed",
            width: ["0", "0", "auto"],
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            minHeight: "100vh",
            marginLeft: ["0", "1rem", "25.2%"],
            width: ["100%", "100%", "46%"],
            borderRight: " 1px solid rgba(0, 0, 0, 0.24)",
          }}
        >
          <Header />
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/communities" element={<>communities</>} />
              <Route path="/bookmarks" element={<>bookmarks</>} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path={`/u/:id`} element={<Profile />} />
            </Routes>
          </div>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
