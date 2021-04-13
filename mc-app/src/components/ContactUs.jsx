import React, { } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../styles/ContactUs.css';
import CustomNavbar from "./CustomNavbar.jsx";

const ContactUs = () => {
    return (<>
        <CustomNavbar title={"CONTACT US"} />
        <div className="contact-content">
            <header className="contact-header">
                <h2 className="futura-med">In The Meantime, let us know if you have any questions or comments.</h2>
                <p className="futura-book">Please note that <strong>we do not have any openings for employment</strong>.</p>
            </header>

            <div className="contact-form">
                <Form>
                    <label className="name-label futura-book" htmlFor="name">Name  *</label>
                    <Form.Group as={Row} className="mb-3 futura-book" controlId="name">
                        <Col>
                            <Form.Control name="first-name" required />
                            <Form.Label column="sm">First Name</Form.Label>
                        </Col>

                        <Col>
                            <Form.Control name="last-name" required />
                            <Form.Label column="sm">Last Name</Form.Label>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="email">
                        <Form.Label>Email  *</Form.Label>
                        <Form.Control name="email" type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="subject">
                        <Form.Label>Subject  *</Form.Label>
                        <Form.Control name="subject" required />
                    </Form.Group>

                    <Form.Group className="mb-4 futura-book" controlId="message">
                        <Form.Label>Message  *</Form.Label>
                        <Form.Control name="message" as="textarea" rows={3} required />
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