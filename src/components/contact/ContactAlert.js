import React from 'react'

const ContactAlert = ({ type }) => {
  if (type === 'success') {
    return (
      <div className='contact-alert contact-alert-success'>
        <p>Message submitted successfully. Thank you!</p>
      </div>
    )
  } else if (type === 'error') {
    return (
      <div className='contact-alert contact-alert-error'>
        <p>Sorry, something went wrong.</p>
      </div>
    )
  } else {
    return <></>
  }
}

export default ContactAlert
