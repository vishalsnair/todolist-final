import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Link from "@mui/material/Link";
// import Header from '../../components/header/Header';

function SigninForm() {
  // const { setflag } = useContext(context);
  const navigate = useNavigate();
  const [userName, setUserName] = useState(false);
  const [password, setPassword] = useState("");

  const submitForm = async () => {
    localStorage.setItem("flag", true);
    const response = await fetch(`http://localhost:3000/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    const data = await response.json();
    if (data) {
      navigate(`/itemlist/${data}`);
    } else {
      alert("Incorrect username and/or password");
    }
  };

  return (
    <>
      <div className="signin">
        <h1>SIGN IN</h1>
        <div className="name">
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
          />
        </div>
        <div class="pwd">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Enter password"
            variant="outlined"
          />
        </div>
        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>
        <Link href="/signup" variant="body2">
          Not a user? Sign up
        </Link>
      </div>
    </>
  );
}

export default SigninForm;
