import "./Work.css"
import siteImg from '../imgs/sites/site1.png'
import git1 from '../imgs/icons/gitIcon.png'
import tab1 from '../imgs/icons/tabIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import tab2 from '../imgs/icons/tabIcon2.png'
import { useState } from "react"

export default function WorkRight() {

    const [gitIcon, setGitIcon] = useState(git1)
    const [tabIcon, setTabIcon] = useState(tab1)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="work--rightside">


            

                {/* <div className="work--content">

                    <div className="content--photo--right">
                        <img src={siteImg} className='content--photo-img'></img>
                    </div>


                    <div className="content--description">
                        <p className="code content--description--text">Solo Project</p>
                        <h1 className="justText content--description--name">Personal Blog</h1>
                        <div className="description--text-wrapper">
                            <p className="justText main-text--description">Responsive personal blog without database but with modern design. If you are interested in me creating the same website for you or with a different design, you can email me (click on the link on the right)</p>
                        </div>
                        <div className="description--technologies-wrapper">
                            <p className="code description--technologies-text">Vue.js</p>
                            <p className="code description--technologies-text">Sass</p>
                            <p className="code description--technologies-text">Brackets</p>
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

                </div> */}

        </div>
    )
}