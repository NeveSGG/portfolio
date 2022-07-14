import './Hero.css'
import Fade from 'react-reveal/Fade'

export default function Hero () {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Fade delay={2000}>
            <section className='Hero' id="Hero">
                <div className='content'>
                    <p className='hello montText'>Привет, меня зовут</p>
                    <h1 className='name ibmText'>Неверов Степан.</h1>
                    <h1 className='whatami ibmText'>Я создаю веб-приложения.</h1>
                    <div className='middletextwrapper'>
                        <p className='description ibmText'>Я являюсь front-end разработчиком и специализируюсь на создании современных и адаптивных сайтов, используя React. В настоящий момент я вместе с командой в <a href='http://studentlabs.ru/' className='montText customLink'>IT-лаборатории</a> в Омске создаём удобное и практичное веб приложения для организации работы в команде разработчиков <a href='https://asmart-group.ru/' className='montText customLink'>Asmart</a>.</p> 
                    </div>
                    <button onClick={() => {
                        openInNewTab('https://github.com/NeveSGG?tab=repositories')
                    }} className='btn montText herobtn'>Посмотреть мои работы</button>
                </div>
            </section>
        </Fade>
    )
}