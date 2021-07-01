import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetails = (props) => {
  const { name, email, phone_num } = props.location.state.contact;
  return (
    <>
      <div className="card-container  d-flex justify-content-center m-4">
        <div
          className="card text-center bg-info mt-4"
          style={{ maxWidth: "25rem" }}
        >
          <div className="card-header ">
            <h2>Contact Details</h2>
          </div>
          <img
            style={{ height: "250px" }}
            src={user}
            className="card-img-top"
            alt="User Not Found!"
          />

          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <strong>Name:</strong>
              {name}{" "}
            </h5>
            <h5 className="card-text">
              <strong>Phone Number: </strong>
              {phone_num}{" "}
            </h5>
            <h5 className="card-text">
              <strong>Email: </strong>
              {email}{" "}
            </h5>
            <Link to="/">
              <button className="btn btn-warning mt-1">
                Back to Contact List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
