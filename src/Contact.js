import './css/Contact.css';

const Contact = () => {
  return(
    <div className='contact'>
       <div className='contact__title'>Contact</div>
       <div className='contact__content'>
        Vous avez une question ?<br />
        Je serais ravi d'en <a  class='contact__mailto' href="mailto:lilianbouvier.dev@gmail.com">discuter</a> avec vous.
      </div>
       
    </div>
  )
}

export default Contact;