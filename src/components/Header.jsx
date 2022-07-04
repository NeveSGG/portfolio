import './Header.css'
import LogoSVG from '../imgs/logo.png'
import { useState } from 'react'
import { useScrollChange } from '../hooks/useScrollChange'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const [classes, setClasses] = useState('menu-btn')
    const [menu, setMenu] = useState(false)

    function changeClasses() {
        setClasses((oldClass) => {
            let newClass=""
            if (oldClass === "menu-btn") {
                newClass = "menu-btn open"
            } else {
                newClass = "menu-btn"
            }
            return newClass
        })
        setMenu((oldMenu) => {
            return (oldMenu ? false : true)
        })
        
    }

    const scrollPosition = useScrollChange()

    return(
        <div 
            className={classNames(
                'trans-shadow pos-fixed Header',
                scrollPosition['scrollDirection'] < 0 ? 'disp-none' : ('disp-inline trans-disp', 
                scrollPosition['scrollPosition'] > 0 ? 'header--shadow opac' : 'header--shadow-none')
                
                )
            }
        >
            <div className='header--wrapper'>
                <img src={LogoSVG} alt=''/>
                <nav>
                    <ul className='Ul'>
                        <li className='Li'>
                            <p className='li--num code'>01.</p>
                            <p className='li--txt code'>About</p>
                        </li>
                        <li className='Li'>
                            <p className='li--num code'>02.</p>
                            <p className='li--txt code'>Experience</p>
                        </li>
                        <li className='Li'>
                            <p className='li--num code'>03.</p>
                            <p className='li--txt code'>Work</p>
                        </li>
                        <li className='Li'>
                            <p className='li--num code'>04.</p>
                            <p className='li--txt code'>Contact</p>
                        </li>
                    </ul>
                    <button className='code headbtn'>Resume</button>
                    <div onClick={changeClasses} className={classes}>
                        <div className="menu-btn__burger"></div>
                    </div>
                </nav>
            </div>

            {menu 
                ? 
                <div className='mobile--nav-wrapper sidebar--show blury'>
                    <nav className='mobile--nav'>
                        <ul className='Ul-mob'>
                            <li className='Li-mob'>
                                <p className='code li--num'>01.</p>
                                <p className='code li--txt'>About</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>02.</p>
                                <p className='code li--txt'>Experience</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>03.</p>
                                <p className='code li--txt'>Work</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>04.</p>
                                <p className='code li--txt'>Contact</p>
                            </li>
                        </ul>
                        <button className='btn-mob code'>Resume</button>
                    </nav>
                </div>
                :
                <div className='mobile--nav-wrapper sidebar--hide'>
                    <nav className='mobile--nav'>
                        <ul className='Ul-mob'>
                            <li className='Li-mob'>
                                <p className='code li--num'>01.</p>
                                <p className='code li--txt'>About</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>02.</p>
                                <p className='code li--txt'>Experience</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>03.</p>
                                <p className='code li--txt'>Work</p>
                            </li>
                            <li className='Li-mob'>
                                <p className='code li--num'>04.</p>
                                <p className='code li--txt'>Contact</p>
                            </li>
                        </ul>
                        <button className='btn-mob code'>Resume</button>
                    </nav>
                </div>
            }



    </div>
    )
}