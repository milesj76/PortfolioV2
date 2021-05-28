import React, { useState } from 'react'
import ContactAlert from './ContactAlert'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const sendForm = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'portfolio-contact',
        'template_zky4da4',
        e.target,
        'user_8802ppPcLBC36bV89bqCl'
      )
      .then(
        res => {
          console.log(res.text)
          resetForm()
          setAlert('success')
        },
        err => {
          console.log(err.text)
          resetForm()
          setAlert('error')
        }
      )

    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return (
    <section className='contact-container' id='contact'>
      <div className='contact-div contact-text'>
        <h1>Contact Me</h1>
        <p>
          Let's work together. Send a message and I'll get back to you as soon
          as I can.
        </p>
      </div>
      <div className='contact-div'>
        <form onSubmit={sendForm}>
          <input
            type='text'
            placeholder='Name'
            id='contact-name'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Email Address'
            id='contact-email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Subject/Budget (Optional)'
            id='contact-subject'
            name='subject'
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Hello Miles, I'd like to talk to you about..."
            id='contact-message'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <input type='submit' className='form-submit' value='Send' />
        </form>
        {alert !== null ? <ContactAlert type={alert} /> : <></>}
      </div>
    </section>
  )
}

export default Contact
