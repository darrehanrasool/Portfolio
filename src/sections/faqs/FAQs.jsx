import { useEffect } from 'react'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'
import { FiActivity } from "react-icons/fi";

const FAQs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })

  return (
    <section id="faqs">
      <h2> <FiActivity></FiActivity> Frequently Asked Questions</h2>
      <p>Explore common Queries about my work . <span className='Rehansdesign'>click</span> to reveal answers .</p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs