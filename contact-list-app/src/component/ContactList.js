import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import user from "../images/smalluser.png";

const ContactList = (props) => {
    // console.log(props);

    const deleteHandler = async (_id) => {
        const deleteContact = await axios.delete(`/contact/${_id}`);
        // console.log(deleteContact);

        const newContactList = props.contacts.filter((contact) => {
            return contact._id !== _id;
        });
        props.setContacts(newContactList);
    };

    const renderContactList = !props.contacts
        ? null
        : props.contacts.map((contact, i) => {
              return (
                  <ContactCard
                      contact={contact}
                      deleteHandler={() => {
                          deleteHandler(contact._id);
                      }}
                      key={i}
                  />
              );
          });

    return (
        <>
            <div className="list-content d-flex justify-content-center mt-5">
                <div className="card " style={{ minWidth: "40%" }}>
                    <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                        <h3 className="mr-5">Contact List </h3>
                        <Link to="add">
                            <button className="btn btn-primary">
                                Add Contact
                            </button>
                        </Link>
                    </div>

                    <ul className="list-group list-group-flush ">
                        {renderContactList.length > 0 ? (
                            renderContactList
                        ) : (
                            <li className="list-group-item border border-success text-center pt-3">
                                <h5>No contact Available</h5>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ContactList;
