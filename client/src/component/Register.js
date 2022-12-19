import React from "react";
import { useState } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "./Register.css";
import OrderFooter from "./orderfooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const [tc, setTc ] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault(e);
    if (
      !tc ||
      password == "" ||
      name == "" ||
      email == "" ||
      phone == "" ||
      state == "" ||
      district == "" ||
      address == "" ||
      pincode == ""
    ) {
      return alert("Fields cannot be empty");
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // setLoading(true);
      const data = await axios.post(
        "http://localhost:8080/api/v1/register",
        { name, email, phone, password, state, district, address, pincode },
        config
      );
      if (data.data.status != "Success") {
        if (data.data.errors.code == 11000) {
          return alert("Phone or Email already exists");
        }

        if (data.data.errors[0].msg == "Invalid value") {
          return alert("Password or Email is invalid");
        }
      }
      

      console.log("abc", data);
      navigate("/");
      // localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      // setError(err.response.data.message);
      console.log(err);
    }
  };

  const handleCheckBoxClick =()=>{
    console.log("check clicked")
    setTc(!tc)
  }

  return (
    <>
      <Header1 />
      <section>
        <div className="row">
          {/* column-1 */}
          <div className="register .col-sm-">
            <h1 className="header1-register2">Laundry Service</h1>
            <h3 className="header3-register2">
              Doorstep Wash & Dryclean Service
            </h3>
            <p className="p-register2">Already Have Account</p>
            <div>
              <button
                className="btn-register2"
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* column-2 */}
          <div className="login-box .col-lg-">
            <div className="row">
              <div className="header-register2">
                <h2>REGISTER</h2>
              </div>
            </div>

            <form onSubmit={submitHandler}>
              {/* column-1 */}
              <div className="loginrow">
                <div className="column">
                  <input
                    className="input-signup"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="district"
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="pincode"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>

                <div className="column">
                  <input
                    className="input-signup2"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />

                  <input
                    className="input-signup2"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="check-box">
                <button style={{border: "none" , backgroundColor: "#F8F9FF"}} onClick={handleCheckBoxClick}>
              <input 
              type="checkbox"/></button><span>I agree to Terms & Condition receiving marketing and
              promotional materials</span> <br/><br/>
              <button className="btn-2">Register</button>
              </div>


              
            </form>
          </div>
        </div>
      </section>
      <Footer1 />
      <OrderFooter />
    </>
  );
};

export default Register;
