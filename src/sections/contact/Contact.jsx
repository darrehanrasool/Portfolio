import contacts from './data'
import './contact.css'
import { FiActivity } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <h2> <FiActivity></FiActivity> Get In Touch</h2>
      <p>
        Send me a <span className='Rehansdesign'> Message</span> via any of the Links below !
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact