import React from "react";
import { Link } from "react-router-dom";
import user from "../images/smalluser.png";

const ContactCard = (props) => {
    // console.log(props);
    const { id, name, phone_num } = props.contact;

    return (
        <li className="list-group-item border border-success d-flex justify-content-between">
            <img className="avatar" src={user} alt="user" />

            <div className="card-content flex-grow-1 mx-3">
                <Link
                    to={{
                        pathname: `/contactdetails/${name}`,
                        state: { contact: props.contact },
                    }}
                    style={{ textDecoration: "none", color: "#000000" }}
                >
                    <h5 className="new-card">{name}</h5>
                    <div className="new-card">{phone_num}</div>
                </Link>
            </div>

            <div className="mt-2">
                <Link
                    to={{
                        pathname: `/update`,
                        state: { contact: props.contact },
                    }}
                >
                    <button className="px-2 py-1 mx-2 rounded btn btn-outline-warning">
                        <i className="fas fa-edit text-dark"></i>
                    </button>
                </Link>
                <button
                    className="px-2 py-1 rounded btn btn-outline-danger"
                    onClick={() => {
                        props.deleteHandler(id);
                    }}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
};

export default ContactCard;
