import React from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_vvi37ho', 'template_ge44qpr', e.target, 'user_RUpQSThF0gMSLd9vpXPnx')
            .then((result) => {
                console.log(result.text);
                alert("Thank You for your Message, I will reply to you soon!");
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form className="contact-form m-5 p-5" onSubmit={sendEmail}>
            {/* <input type="hidden" name="contact_number" /> */}
            <label>Name</label>
            <input type="text" name="user_name" />
            <br />
            <br />
            <label>Email Address</label>
            <input type="email" name="user_email" />
            <br />
            <br />
            <label>Message</label>
            <textarea name="message" />
            <br />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;