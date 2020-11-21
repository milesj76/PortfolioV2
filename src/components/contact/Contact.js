import React from 'react'

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <div className="contact-div contact-text">
                <h1>Contact Me</h1>
                <p>Let's work together. Send a message and I'll get back to you as soon as I can.</p>
            </div>
            <div className="contact-div">
                <form>
                    <input type="text" placeholder="Name" id="contact-name" />
                    <input type="email" placeholder="Email Address" id="contact-email" />
                    <input type="text" placeholder="Subject/Budget (Optional)" id="contact-subject" />
                    <textarea placeholder="Hello Miles, I'd like to talk to you about..." id="contact-message" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
