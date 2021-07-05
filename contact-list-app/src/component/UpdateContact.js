import { useHistory } from "react-router";
import axios from "axios";
import validator from "validator";
import { Form, Field } from "react-final-form";

export default function UpdateContact(props) {
    let history = useHistory();

    // console.log(props)
    const { _id, name, email, phone_num } = props.location.state.contact;

    const updateContact = async (values) => {
        let updatedContact = {
            _id: _id,
            name: values.name,
            email: values.email,
            phone_num: parseInt(values.phone_num),
        };
        // console.log(updatedContact);

        const res = await axios.put(`/contact/${_id}`, updatedContact);
        // console.log(res.data);

        props.setContacts(
            props.contacts.map((contact) => {
                return contact._id === _id ? { ...updatedContact } : contact;
            })
        );

        history.push("/");
    };

    return (
        <>
            <div className="container add d-flex justify-content-center align-items-center">
                <div className="add-content bg-dark text-white mb-4">
                    <h3 className="text-center pb-3">Update Contact</h3>

                    <Form
                        onSubmit={updateContact}
                        subscription={{
                            submitted: true,
                        }}
                        initialValues={{
                            name: name,
                            email: email,
                            phone_num: phone_num,
                        }}
                    >
                        {({ handleSubmit, submitting, values }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="exampleInputName"
                                    placeholder="abc"
                                    validate={(value) =>
                                        value ? undefined : "Name is Required "
                                    }
                                >
                                    {({ input, meta, placeholder }) => (
                                        <div className="form-group mb-3">
                                            <h6
                                                htmlFor="exampleInputName"
                                                className="form-label ml-2"
                                            >
                                                Name
                                            </h6>
                                            <input
                                                {...input}
                                                placeholder={placeholder}
                                            />

                                            <div className="form-text text-warning">
                                                {meta.error && meta.touched && (
                                                    <span>{meta.error}</span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Field>

                                <Field
                                    type="text"
                                    name="phone_num"
                                    className="form-control"
                                    id="exampleInputPhone_num"
                                    placeholder="9988776655"
                                    validate={(value) =>
                                        value
                                            ? !validator.isMobilePhone(
                                                  value.toString() || ""
                                              ) &&
                                              "Please Enter valid Mobile Number "
                                            : " "
                                    }
                                >
                                    {({ input, meta, placeholder }) => (
                                        <div className="form-group mb-3">
                                            <h6
                                                htmlFor="exampleInputPhone_num"
                                                className="form-label"
                                            >
                                                Mobile Number
                                            </h6>
                                            <input
                                                {...input}
                                                placeholder={placeholder}
                                            />

                                            <div className="form-text text-warning">
                                                {meta.error && meta.touched && (
                                                    <span>{meta.error}</span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="abc@gmail.com"
                                    validate={(value) =>
                                        !validator.isEmail(value || "") &&
                                        "Plese Enter valid Email "
                                    }
                                >
                                    {({ input, meta, placeholder }) => (
                                        <div className="form-group mb-3">
                                            <h6
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Email
                                            </h6>
                                            <input
                                                {...input}
                                                placeholder={placeholder}
                                            />

                                            <div className="form-text text-warning">
                                                {meta.error && meta.touched && (
                                                    <span>{meta.error}</span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                                <div className="button-field d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-success px-5 mt-2"
                                        disabled={submitting}
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}
