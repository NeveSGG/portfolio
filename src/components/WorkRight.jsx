import "./Work.css"
import siteImg from '../imgs/sites/site1.png'
import git1 from '../imgs/icons/gitIcon.png'
import tab1 from '../imgs/icons/tabIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import tab2 from '../imgs/icons/tabIcon2.png'
import { useState } from "react"
import Fade from 'react-reveal/Fade'

export default function WorkRight() {

    const [gitIcon, setGitIcon] = useState(git1)
    const [tabIcon, setTabIcon] = useState(tab1)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Fade>
        <div className="work--rightside">

                <div className="work--content">

                    <div className="content--photo--right">
                        <img src={siteImg} className='content--photo-img'></img>
                        <div className="content--photo-cover"></div>
                    </div>


                    <div className="content--description">
                        <p className="montText content--description--text">Solo Project</p>
                        <a href="http://neverovblog.site/"><h1 className="ibmText content--description--name">Персональный Блог</h1></a>
                        <div className="description--text-wrapper">
                            <p className="ibmText main-text--description">Адаптивный персональный блог без базы данных но с современным дизайном. Если вы заинтересованы в том, чтобы я сделал для вас такой же сайт или с другим дизайном, вы можете написать мне на почту <a className="customLink ibmText" href='mailto:neverovsg@gmail.com'>neverovsg@gmail.com</a>.</p>
                        </div>
                        <div className="description--technologies-wrapper">
                            <p className="montText description--technologies-text">Vue.js</p>
                            <p className="montText description--technologies-text">Sass</p>
                            <p className="montText description--technologies-text">Brackets</p>
                        </div>

                        <div className="description--icons">
                        <img className="description--icon" src={gitIcon} 
                            onMouseEnter={() => {
                                setGitIcon(git2)
                            }}
                            onMouseLeave={() => {
                                setGitIcon(git1)
                            }}
                            onMouseDown={()=> {
                                openInNewTab("https://github.com/NeveSGG/Personal-Blog")
                            }}
                            ></img>
                            <img className="description--icon" src={tabIcon} onMouseEnter={() => {
                                setTabIcon(tab2)
                            }}
                            onMouseLeave={() => {
                                setTabIcon(tab1)
                            }}
                            onMouseDown={()=> {
                                openInNewTab("http://neverovblog.site/")
                            }}
                            ></img>
                        </div>
                    </div>

                </div>

        </div>
        </Fade>
    )
}