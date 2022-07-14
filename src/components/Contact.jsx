import './Contact.css'
import Fade from 'react-reveal/Fade'

export default function Contact() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return(
        <Fade>
        <div className='Contact' id='Contact'>
            <p className='montText contact-title'>04. Что дальше?</p>
            <h1 className='ibmText contact-getintouch'>Связаться со мной</h1>
            <p className='ibmText contact-description'>В данный момент я активно ищу постоянное место работы и открыт ко всем предложения. Если вы хотите заказать сайт, то также можете писать мне.</p>
            <button onClick={() => {
                openInNewTab('mailto:neverovsg@gmail.com')
            }} className='montText glow-on-hover'>Написать мне</button>
        </div>
        </Fade>
    )
}