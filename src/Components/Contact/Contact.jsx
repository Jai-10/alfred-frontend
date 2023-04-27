import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <p>Reach out!</p>

        <input type="text" placeholder='Email' />
        <textarea cols="30" rows="10" placeholder='Message'></textarea>
        <button>Send</button>
    </div>
  )
}

export default Contact;