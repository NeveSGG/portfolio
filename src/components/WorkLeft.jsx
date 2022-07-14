import "./Work.css"
import siteImg from '../imgs/sites/site2.png'
import git1 from '../imgs/icons/gitIcon.png'
import tab1 from '../imgs/icons/tabIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import tab2 from '../imgs/icons/tabIcon2.png'
import { useState } from "react"
import Fade from 'react-reveal/Fade'

export default function WorkLeft() {

    const [gitIcon, setGitIcon] = useState(git1)
    const [tabIcon, setTabIcon] = useState(tab1)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Fade delay={200}>
        <div className="work--leftside">

                <div className="work--content">

                    <div className="content--description">
                        <p className="montText content--description--text--left">Solo Project</p>
                        <a href='https://waterdrops.netlify.app/'><h1 className="ibmText content--description--name--left">Прогноз Погоды</h1></a>
                        <div className="description--text-wrapper--left">
                            <p className="ibmText main-text--description--left">Минималистичное веб приложение в сине-серых тонах для проверки прогноза погоды. Работает со всеми городами и странами мира.</p>
                        </div>
                        <div className="description--technologies-wrapper--left">
                            <p className="montText description--technologies-text">React</p>
                            <p className="montText description--technologies-text">API</p>
                            <p className="montText description--technologies-text">Npm</p>
                            <p className="montText description--technologies-text">VS Code</p>
                        </div>

                        <div className="description--icons--left">
                            <img className="description--icon" src={gitIcon} 
                            onMouseEnter={() => {
                                setGitIcon(git2)
                            }}
                            onMouseLeave={() => {
                                setGitIcon(git1)
                            }}
                            onMouseDown={()=> {
                                openInNewTab("https://github.com/NeveSGG/WeatherForecast")
                            }}
                            ></img>
                            <img className="description--icon" src={tabIcon} onMouseEnter={() => {
                                setTabIcon(tab2)
                            }}
                            onMouseLeave={() => {
                                setTabIcon(tab1)
                            }}
                            onMouseDown={()=> {
                                openInNewTab("https://waterdrops.netlify.app/")
                            }}
                            ></img>
                        </div>
                    </div>

                    <div className="content--photo--left">
                        <img src={siteImg} className='content--photo-img'></img>
                        <div className="content--photo-cover"></div>
                    </div>
                </div>
                
            </div>
        </Fade>
    )
}