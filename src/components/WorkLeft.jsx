import "./Work.css"
import siteImg from '../imgs/sites/site2.png'
import git1 from '../imgs/icons/gitIcon.png'
import tab1 from '../imgs/icons/tabIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import tab2 from '../imgs/icons/tabIcon2.png'
import { useState } from "react"

export default function WorkLeft() {

    const [gitIcon, setGitIcon] = useState(git1)
    const [tabIcon, setTabIcon] = useState(tab1)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="work--leftside">

                <div className="work--content">

                    <div className="content--description">
                        <p className="code content--description--text--left">Solo Project</p>
                        <h1 className="justText content--description--name--left">Weather Forecast APP</h1>
                        <div className="description--text-wrapper--left">
                            <p className="justText main-text--description--left">A minimal dark-blue web application to check the weather. Works with any places of the world.</p>
                        </div>
                        <div className="description--technologies-wrapper--left">
                            <p className="code description--technologies-text">React</p>
                            <p className="code description--technologies-text">API</p>
                            <p className="code description--technologies-text">Npm</p>
                            <p className="code description--technologies-text">VS Code</p>
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
                    </div>
                </div>
                
            </div>
    )
}