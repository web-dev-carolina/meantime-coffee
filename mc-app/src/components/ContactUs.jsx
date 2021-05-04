import React, { } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../styles/ContactUs.css';
import CustomNavbar from "./CustomNavbar.jsx";
import Axios from "axios";

const ContactUs = () => {
    const [lname, setLname] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = {
            name: fname + " " + lname,
            email,
            subject,
            message,
        }
        console.log(formData);

        Axios.post(
            'https://us-central1-meantime-d7f65.cloudfunctions.net/sendEmail',
            formData,
        ).then(res => {
            console.log(res);
            clearForm();
        }).catch();
    };

    const clearForm = () => {
        setLname("");
        setFname("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (<>
        <CustomNavbar title={"CONTACT US"} />
        <div className="contact-content">
            <header className="contact-header">
                <h2 className="futura-med">In The Meantime, let us know if you have any questions or comments.</h2>
                <p className="futura-book">Please note that <strong>we do not have any openings for employment</strong>.</p>
            </header>

            <div className="contact-form">
                <Form onSubmit={sendEmail}>
                    <label className="name-label futura-book" htmlFor="name">Name  *</label>
                    <Form.Group as={Row} className="mb-3 futura-book" controlId="name">
                        <Col>
                            <Form.Control name="first-name" required onChange={e => setFname(e.target.value)} value={fname} />
                            <Form.Label column="sm">First Name</Form.Label>
                        </Col>

                        <Col>
                            <Form.Control name="last-name" required onChange={e => setLname(e.target.value)} value={lname} />
                            <Form.Label column="sm">Last Name</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="email">
                        <Form.Label>Email  *</Form.Label>
                        <Form.Control name="email" type="email" required onChange={e => setEmail(e.target.value)} value={email} />
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="subject">
                        <Form.Label>Subject  *</Form.Label>
                        <Form.Control name="subject" required onChange={e => setSubject(e.target.value)} value={subject} />
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="message">
                        <Form.Label>Message  *</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} required onChange={e => setMessage(e.target.value)} value={message} />
                    </Form.Group>


                    <Button className="contact-form-button futura-med" variant="dark" type="submit">
                        <strong>   SUBMIT   </strong>
                    </Button>
                </Form>
            </div>


        </div>

    </>)
}

export default ContactUs;