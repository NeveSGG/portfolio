import './About.css'
import aboutImage from "../imgs/myPhoto.jpg"
import {useState} from 'react'
import Fade from 'react-reveal/Fade'

export default function About() {

    
    const [isShown, setIsShown] = useState(false)


    return (
        
        <div id='About'>
            <Fade>
            <div className='about'>

                <div className='about--text'>

                    <div className='about--text-title'>
                        <p className='code about-title-num'>01.</p>
                        <h1 className='ibmText about-title-title'>Обо мне</h1>
                        <div className='vertical-line'></div>
                    </div>

                    <p className='about--description ibmText'>
                        Привет! Меня зовут Степан и мне нравится писать красивые сайты. Мой интерес к созданию сайтов появился в начале 2022 года, когда я решил написать свой сайт портфолио — оказалось, что это сложнее чем я себе представлял. Особенно тяжелым для меня было писать стили CSS.
                    </p>

                    <p className='about--description ibmText'>
                        И вот, спустя несколько месяцев, я могу самостоятельно писать адаптивные и, как по мне, привлекательные сайты по различным тематикам и функционалу. На сегодняшний день, моей главной целью является развитие своих навыков, получение новых знаний и трудоустройство в хорошей компании.
                    </p>

                    <p className='about--description ibmText'>
                        Также недавно я начал изучать back-end и смотреть соответствующие <a href='#' className='customLink ibmText'>курсы</a>, потому что в будущем я планирую расширить свои знания до full-stack разработчика.
                    </p>

                    <p className='about--description ibmText'>
                        Вот несколько технологий, которые мне удалось освоить с зимы 2022-го:
                    </p>

                    <div className='about--list'>
                        <ul className='about--list-left'>
                            <li className='ibmText list-li'>
                                <p className='ibmText-list-li'>JavaScript (ES6+)</p>
                            </li>

                            <li className='list-li'>
                                <p className='ibmText-list-li'>React</p>
                            </li>

                            <li className='list-li'>
                                <p className='ibmText-list-li'>Vue</p>
                            </li>
                        </ul>

                        <ul className='about--list-right'>
                            <li className='list-li'>
                                <p className='ibmText-list-li'>TypeScript</p>
                            </li>

                            <li className='list-li'>
                                <p className='ibmText-list-li'>Node.js</p>
                            </li>

                            <li className='list-li'>
                                <p className='ibmText-list-li'>Custom Hooks</p>
                            </li>
                        </ul>
                    </div>

                </div>

                    <div className='about--photo'>
                        
                            <div className={
                                isShown ? 'background--frame background--frameOnHover' :
                                'background--frame background--frameTransition'
                            } 
                            >
                            </div>

                            <div className='about--img-wrapper'
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                            >
                                <img className='about--image' src={aboutImage}></img>
                            </div>
                        
                    </div>
            </div>

            <div className='about--photo-2'>
                    <div className={
                        isShown ? 'background--frame background--frameOnHover' :
                        'background--frame background--frameTransition'
                    } 
                    >
                    </div>

                    <div className='about--img-wrapper'
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <img className='about--image' src={aboutImage}></img>
                    </div>
                </div>
            </Fade>
        </div>
    )
}