import './Contact.css'

export default function Contact() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return(
        <div className='Contact' id='Contact'>
            <p className='code contact-title'>04. What`s Next?</p>
            <h1 className='justText contact-getintouch'>Get In Touch</h1>
            <p className='justText contact-description'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <button onClick={() => {
                openInNewTab('mailto:neverovsg@gmail.com')
            }} className='code glow-on-hover'>Say Hello</button>
        </div>
    )
}