import { useEffect, useState } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "./Login.css";
import OrderFooter from "./orderfooter";
// import { useNavigate } from "react-router";
import axios from "axios";
import Loading from "./Loading";
import Order from "./order";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginstate, setLoginstate] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let temp = email - 0;
    console.log(temp == email);
    console.log(temp);
    // let field  = "email";

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);
      let data;
      if (temp == email) {
        let { data } = await axios.post(
          "http://localhost:8080/api/v1/login",
          {
            phone: email,
            password,
          },
          config
        );
        console.log(data, "A");
        if (data.status == "FAILED") {
          setLoading(false);
          return alert("No user exists with the data");
        }
        if (data.status == "Failed") {
          setLoading(false);
          return alert("Incorrect Password");
        }
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        let { data } = await axios.post(
          "http://localhost:8080/api/v1/login",
          {
            email,
            password,
          },
          config
        );
        console.log(data, "E");
        if (data.status == "FAILED") {
          setLoading(false);
          return alert("No user exists with the data");
        }
        if (data.status == "Failed") {
          setLoading(false);
          return alert("Incorrect Password");
        }
        localStorage.setItem("userInfo", JSON.stringify(data));
      }

    

      Navigate("/order");

      setLoginstate(!loginstate);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <Header1 />

      <div className="container">
        <div className="row">
          {/* column-1 */}
          <div className="registerPage col">
            <h1 className="header1-register">Laundry Service</h1>
            <h3 className="header3-register">
              Doorstep Wash & Dryclean Service
            </h3>
            <p className="p-register">Don’t Have An Account?</p>
            <div>
              <button
                className="btn-register"
                onClick={() => {
                  Navigate("/Register");
                }}
              >
                Register
              </button>
            </div>
          </div>
          {/* column-2 */}
          <div className="signupBox col">
            <h3 className="header3-signup">SIGN IN</h3>
            <form className="signin-table" onSubmit={submitHandler}>
              <input className="input-signup"
                value={email}
                name="email"
                placeholder="Email / Mobile"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input className="input-signup"
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <small id="password" className="form-text text-muted right">
                    Forget Password.
                  </small>

                <button type="submit" className="btn-signup">
                  Sign In
            </button>
            </form>
            
          </div>
        </div>
      </div>
      
      <Footer1 />

      <OrderFooter />
    </>
  );
};

export default Login;
