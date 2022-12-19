import React from "react";
import "./Footer1.css"

const Footer1 = () => {
  return (
    <>
    <hr />
     <div className="main-footer">
      <div className="container">
        {/* row -1 */}
        <div className="row-1 row text-center">
          <h3>Now Refer & Earn ₹500 for every referral*</h3>
          <ul className="list-unstyled">
          * Terms and conditions will be applied
          </ul>
        </div>
        <hr />
        {/* row -2 */}
        <div className="row-2 row">
          {/* column-1 */}
          <div className="col">
            <h4>ABOUT US</h4>
            <ul className="list-unstyled">
              <li>Doorstep Wash & Dryclean Service</li>
            </ul>
          </div>
          {/* column-2 */}
          <div className="col">
            <h4>Home</h4>
            <ul className="list-unstyled">
              <li>Sign In</li>
              <li>Register</li>
            </ul>
          </div>
          {/* column-3 */}
          <div className="col">
          <h4>Pricing</h4>
          </div>
          {/* column-4 */}
          <div className="col">
          <h4>Career</h4>
            <ul className="list-unstyled">
              <li>Blogs</li>
              <li>Create</li>
            </ul>
          </div>
          {/* column-5 */}
          <div className="col">
          <h4>Contact</h4>
          </div>
          {/* column-6 */}
          <div className="col">
            <h4>SOCIAL MEDIA</h4>
            <ul className="list-inline-mb-0">
              <li className="list-inline-item"><i className="fa-brands fa-facebook"></i></li>
              <li className="list-inline-item"><i className="fa-brands fa-instagram"></i></li>
              <li className="list-inline-item"><i className="fa-brands fa-linkedin"></i></li>
            </ul>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};
export default Footer1;
