import './About.css'
import aboutImage from "../imgs/myPhoto.jpg"
import {useState} from 'react'

export default function About() {

    
    const [isShown, setIsShown] = useState('false')


    return (
        <div>
            <div className='about'>

                <div className='about--text'>

                    <div className='about--text-title'>
                        <p className='code about-title-num'>01.</p>
                        <h1 className='justText about-title-title'>About Me</h1>
                        <div className='vertical-line'></div>
                    </div>

                    <p className='about--description justText'>
                        Hello! My <a href='#' className='customLink justText'>name is Brittany and</a> I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>

                    <p className='about--description justText'>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>

                    <p className='about--description justText'>
                        I also recently launched a <a href='#' className='customLink justText'>course</a> that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>

                    <p className='about--description justText'>
                        Here are a few technologies I’ve been working with recently:
                    </p>

                    <div className='about--list'>
                        <ul className='about--list-left'>
                            <li className='justText list-li'>
                                <p className='justText-list-li'>JavaScript (ES6+)</p>
                            </li>

                            <li className='list-li'>
                                <p className='justText-list-li'>React</p>
                            </li>

                            <li className='list-li'>
                                <p className='justText-list-li'>Node.js</p>
                            </li>
                        </ul>

                        <ul className='about--list-right'>
                            <li className='list-li'>
                                <p className='justText-list-li'>TypeScript</p>
                            </li>

                            <li className='list-li'>
                                <p className='justText-list-li'>Eleventy</p>
                            </li>

                            <li className='list-li'>
                                <p className='justText-list-li'>WordPress</p>
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
                    
                    <div className={
                        isShown ? 'dispnone' : 'img-filter'
                    }
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
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
                    
                    <div className={
                        isShown ? 'dispnone' : 'img-filter'
                    }
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                    </div>
                </div>

        </div>
        
    )
}