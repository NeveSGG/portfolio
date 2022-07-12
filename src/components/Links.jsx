import "./Links.css"
import './Footer.css'
import github from "../imgs/icons/github.png"
import vk from "../imgs/icons/vk.png"
import instagram from "../imgs/icons/instagram.png"
import telegram from "../imgs/icons/telegram.png"

export default function Links () {
    return (
            <div className="Links">
                    
                    <div className="linksWrapper">
                        <a href="#" className="links-linksss">
                            <img className="links-img"
                                src={github}
                                alt='github'
                            />
                        </a>

                        <a href="#" className="links-linksss">
                            <img className="links-img"
                                src={vk}
                                alt='vk'
                            />
                        </a>

                        <a href="#" className="links-linksss">
                            <img className="links-img"
                                src={instagram}
                                alt='instagram'
                            />
                        </a>

                        <a href="#" className="links-linksss">
                            <img className="links-img"
                                src={telegram}
                                alt='telegram'
                            />
                        </a>

                        <div className="line"></div>
                    </div>

                    <div className="linksWrapper">
                        <p><a href = "mailto:neverovsg@gmail.com" className="mailto code">neverovsg@gmail.com</a></p>
                        <div className="line2"></div>
                    </div>
                    
                    

            </div>
    )
}