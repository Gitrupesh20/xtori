import Box from "@mui/material/Box";
import {
  TextField,
  Container,
  Snackbar,
  Alert,
  LinearProgress,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

const SignUp = () => {
  const [date, setDate] = useState(null);
  const [Details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    dateOfBirth: null,
  });
  const [alert, setalert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setalert(false);
  };

  const handleChange = (e) => {
    setDetails({ ...Details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSpinner(true);
    if (!validator.isEmail(Details.email)) {
      setSpinner(false);
      setAlertMsg("Enter valid email");
      setalert(true);
    } else if (
      !validator.isStrongPassword(Details.pwd, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setSpinner(false);
      setAlertMsg(
        "password must contain atleast 1 lowercase , 1 uppercase 1 symbol, 1number"
      );
      setalert(true);
    } else {
      console.log(Details);
      setSpinner(false);
    }
  };

  return (
    <>
      {spinner && <LinearProgress color="inherit" />}
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          paddingTop: ["2rem", "4rem", "0rem"],
          paddingLeft: ["2rem", "5rem", "0rem"],
        }}
      >
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert color="error" onClose={handleClose}>
            {alertMsg}
          </Alert>
        </Snackbar>
        <Box
          sx={{
            flex: "1",
            height: ["max-content", "100vh"],
            width: "50%",
            textAlign: "center",
            marginBottom: "3rrem",
          }}
        >
          <Box
            sx={{
              mt: ["1rerm", "2rem", "17rem"],
            }}
          >
            <svg
              width="300"
              height="98"
              viewBox="0 0 300 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.6364 0.909088L54.3636 28H55.0909L75.0909 0.909088H104.364L68.9091 47.4545L90 94H61.8182L50.5455 66.3636H49.8182L29.4545 94H0L36.3636 47.4545L16.3636 0.909088H43.6364ZM156.841 46.128C148.99 47.4933 144.596 48.2613 143.657 48.432L135.337 49.84C135.337 54.2773 135.38 58.928 135.465 63.792C135.636 68.656 135.849 72.9227 136.105 76.592C136.446 81.5413 137.044 85.3387 137.897 87.984C138.75 90.6293 139.22 92.1227 139.305 92.464C139.305 93.3173 138.75 94.0853 137.641 94.768C136.617 95.536 135.636 95.92 134.697 95.92C134.185 95.92 133.758 95.7493 133.417 95.408C133.076 95.152 132.777 94.6827 132.521 94C132.009 92.8053 131.497 90.5867 130.985 87.344C130.558 84.1013 130.217 80.5173 129.961 76.592C129.705 73.0933 129.492 69.04 129.321 64.432C129.236 59.7387 129.193 55.216 129.193 50.864C124.414 51.632 119.508 52.5707 114.473 53.68C109.95 54.6187 107.262 55.088 106.409 55.088C105.385 55.088 104.404 54.7893 103.465 54.192C102.612 53.5947 102.185 52.784 102.185 51.76C102.185 50.6507 102.569 49.9253 103.337 49.584C104.105 49.2427 105.385 49.072 107.177 49.072C108.457 49.072 110.334 48.8587 112.809 48.432C115.284 47.92 116.862 47.5787 117.545 47.408C123.262 46.2987 127.145 45.5733 129.193 45.232C129.193 43.44 129.108 41.0933 128.937 38.192C128.766 34.2667 128.681 31.28 128.681 29.232C128.681 25.904 128.766 23.344 128.937 21.552C129.193 19.6747 129.62 18.0107 130.217 16.56C130.9 14.8533 132.18 14 134.057 14C134.825 14 135.337 14.128 135.593 14.384C135.849 14.64 135.977 15.1093 135.977 15.792C135.977 16.304 135.764 17.7973 135.337 20.272C134.91 22.7467 134.697 26.032 134.697 30.128C134.697 33.2853 134.782 36.8267 134.953 40.752L135.081 44.208C138.921 43.6107 146.516 42.032 157.865 39.472C158.548 39.3013 159.102 38.704 159.529 37.68C160.041 36.656 160.553 36.144 161.065 36.144C162.004 36.144 162.942 36.6987 163.881 37.808C164.905 38.832 165.417 39.8987 165.417 41.008C165.417 42.4587 164.777 43.568 163.497 44.336C162.302 45.104 160.084 45.7013 156.841 46.128ZM189.243 94.896C183.526 94.896 179.302 93.3173 176.571 90.16C173.84 87.0027 172.475 83.0773 172.475 78.384C172.475 74.288 173.2 69.2107 174.651 63.152C176.187 57.0933 178.32 51.6747 181.051 46.896C181.222 46.5547 181.904 45.3173 183.099 43.184C184.379 40.9653 185.787 39.3013 187.323 38.192C188.859 36.9973 190.48 36.4 192.187 36.4C192.955 36.4 193.638 36.6133 194.235 37.04C194.918 37.3813 195.259 37.8507 195.259 38.448C195.259 38.6187 195.003 39.0453 194.491 39.728C194.064 40.3253 193.723 40.7947 193.467 41.136C190.566 44.6347 188.219 48.0907 186.427 51.504C184.038 55.856 182.16 60.1653 180.795 64.432C179.515 68.6987 178.875 73.3493 178.875 78.384C178.875 85.1253 182.971 88.496 191.163 88.496C195.003 88.496 198.544 87.3867 201.787 85.168C205.115 82.9493 207.76 80.2613 209.723 77.104C211.686 73.8613 212.667 70.9173 212.667 68.272C212.667 65.2853 211.686 62.6827 209.723 60.464C207.76 58.2453 205.072 55.8987 201.659 53.424C199.44 51.8027 197.819 50.48 196.795 49.456C195.771 48.432 195.259 47.5787 195.259 46.896C195.259 45.872 195.984 45.0613 197.435 44.464C198.886 43.7813 200.592 43.44 202.555 43.44C203.664 43.44 204.39 43.5253 204.731 43.696C205.072 43.7813 205.243 43.9947 205.243 44.336C205.243 44.5067 205.072 44.8053 204.731 45.232C204.475 45.5733 204.347 45.872 204.347 46.128C204.347 46.384 205.2 47.2373 206.907 48.688C210.32 51.504 213.179 54.3627 215.483 57.264C217.787 60.1653 218.939 63.5787 218.939 67.504C218.939 70.832 217.702 74.672 215.227 79.024C212.752 83.376 209.254 87.1307 204.731 90.288C200.208 93.36 195.046 94.896 189.243 94.896ZM271.385 44.208C270.788 44.208 270.19 43.952 269.593 43.44C269.081 42.928 268.484 42.2027 267.801 41.264C267.204 40.4107 266.393 39.6853 265.369 39.088C264.43 38.4907 263.449 38.192 262.425 38.192C259.95 38.192 256.622 41.4773 252.441 48.048C248.26 54.5333 244.164 62.7253 240.153 72.624C240.238 74.5867 240.366 77.0613 240.537 80.048C240.793 83.0347 240.964 85.2533 241.049 86.704L241.433 91.824C241.433 93.0187 241.177 94.0427 240.665 94.896C240.153 95.8347 239.214 96.304 237.849 96.304C236.398 96.304 235.46 94.384 235.033 90.544C234.606 86.6187 234.35 80.944 234.265 73.52C234.18 71.6427 234.094 68.9547 234.009 65.456C234.009 61.9573 233.924 57.776 233.753 52.912C233.497 45.5733 233.369 40.3253 233.369 37.168C233.369 35.2053 234.564 34.224 236.953 34.224C238.404 34.224 239.257 34.864 239.513 36.144C239.854 37.3387 240.025 39.6853 240.025 43.184V63.536C242.585 56.9653 245.358 51.2907 248.345 46.512C251.332 41.7333 254.233 38.1067 257.049 35.632C259.95 33.072 262.51 31.792 264.729 31.792C266.606 31.792 268.398 32.2187 270.105 33.072C271.812 33.9253 273.177 35.0347 274.201 36.4C275.225 37.68 275.737 38.9173 275.737 40.112C275.737 40.88 275.182 41.776 274.073 42.8C273.049 43.7387 272.153 44.208 271.385 44.208ZM291.617 15.792C290.166 15.792 288.673 15.1947 287.137 14C285.686 12.8053 284.961 11.824 284.961 11.056C284.961 10.1173 285.388 9.22133 286.241 8.368C287.18 7.51466 288.118 7.088 289.057 7.088C290.337 7.51466 291.404 8.19733 292.257 9.13599C292.94 9.81866 293.708 10.7147 294.561 11.824C295.414 12.9333 295.841 13.616 295.841 13.872C295.841 15.152 294.433 15.792 291.617 15.792ZM295.457 96.944C294.262 96.8587 293.366 94.9387 292.769 91.184C292.257 87.4293 291.702 80.304 291.105 69.808C290.764 62.896 290.465 56.1547 290.209 49.584C289.953 42.928 289.782 37.808 289.697 34.224C289.697 33.2853 289.825 32.6027 290.081 32.176C290.422 31.664 291.02 31.408 291.873 31.408C293.836 31.408 295.073 32.2187 295.585 33.84C296.097 35.4613 296.353 38.576 296.353 43.184L296.225 58.288C296.225 66.9067 296.481 73.8187 296.993 79.024C296.993 79.28 297.377 82.0107 298.145 87.216C298.742 90.8 299.041 93.1893 299.041 94.384C299.041 95.2373 298.657 95.8773 297.889 96.304C297.206 96.816 296.396 97.0293 295.457 96.944Z"
                fill="black"
              />
            </svg>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            paddingLeft: ["0", "3rem", "4rem"],
            paddingTop: "2.5rem",
          }}
        >
          <div style={{ padding: "6px", lineClamp: "inherit" }}>
            <h1>Create your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "max-content",
                padding: "5px",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: ["column", "column", "column"],
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="FirstName"
                  name="firstName"
                  label="First Name"
                  value={Details.firstName}
                  onChange={handleChange}
                  sx={{ mr: "10px" }}
                />
                <br />
                <TextField
                  required
                  fullWidth
                  id="LastName"
                  name="lastName"
                  label="Last Name"
                  value={Details.lastName}
                  onChange={handleChange}
                />{" "}
                <br />
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={Details.email}
                  onChange={handleChange}
                  sx={{ mr: "10px" }}
                />
              </Container>
              <br />
              <Container sx={{ display: "flex", flexDirection: "column" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={date}
                    name="dateOfBirth"
                    onChange={(e) => {
                      const newDate = dayjs(e);
                      setDate(e);
                      setDetails({
                        ...Details,
                        dateOfBirth: newDate.format("YYYY-MM-DD"),
                      });
                    }}
                  />
                </LocalizationProvider>
                <br />
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="pwd"
                  label="Password"
                  value={Details.pwd}
                  onChange={handleChange}
                  sx={{ width: "20rem" }}
                />
                <br />
                <br />
                <button style={{ height: "3rem", m: "5px" }}>Create</button>
                <Link to={"/signin"}>
                  <p>Log in?</p>
                </Link>
              </Container>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
