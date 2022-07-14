import './Header.css'
import LogoSVG from '../imgs/logo.png'
import { useState, useEffect, useRef } from 'react'
import { useScrollChange } from '../hooks/useScrollChange'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    
    const [classes, setClasses] = useState('menu-btn')
    const [menu, setMenu] = useState(false)

    const [item1, setItem1] = useState('')
    const [item2, setItem2] = useState('')
    const [item3, setItem3] = useState('')
    const [item4, setItem4] = useState('')

    const toggler = (value) => {
        return (value ? false : true)
    }

    function changeClasses() {
        setClasses((oldClass) => {
            let newClass=""
            if (oldClass === "menu-btn") {
                newClass = "menu-btn open"
                document.body.classList.add('disable-scroll')
            } else {
                newClass = "menu-btn"
                document.body.classList.remove('disable-scroll')
            }
            return newClass
        })
        setMenu((oldMenu) => toggler(oldMenu))
    }

    function closeMenu(){
        setClasses('menu-btn')
        document.body.classList.remove('disable-scroll')
        setMenu(false)
    }

    const scrollPosition = useScrollChange()

    const sidebarRef = useRef(null)
    
    

    return(
        
        <div 
            className={classNames(
                'Header trans-shadow pos-fixed',
                scrollPosition['scrollDirection'] < 0 ? 'Header--hide' : ('Header--show', 
                scrollPosition['scrollPosition'] > 0 ? 'header--shadow opac' : 'header--shadow-none')
                
                )
            }
        >
            <div className='header--wrapper'>
                <a href='#Hero' className='Header--logo' onMouseDown={() => {closeMenu()}}>
                    <img src={LogoSVG} alt='' className='Header--logotip'/>
                </a>
                <nav>
                    <ul className='Ul'>
                        <li className='Li' onMouseEnter={() => {setItem1(' green')}} onMouseLeave={() => {setItem1('')}}>
                            <a href="#About" className='Li-element'>
                                <p className={'li--num code'+item1}>01.</p>
                                <p className={'li--txt montText'+item1}>Обо мне</p>
                            </a>
                        </li>
                        <li className='Li' onMouseEnter={() => {setItem2(' green')}} onMouseLeave={() => {setItem2('')}}>
                            <a href="#Experience" className='Li-element'>
                                <p className={'li--num code'+item2}>02.</p>
                                <p className={'li--txt montText'+item2}>Опыт</p>
                            </a>
                        </li>
                        <li className='Li' onMouseEnter={() => {setItem3(' green')}} onMouseLeave={() => {setItem3('')}}>
                            <a href="#Work" className='Li-element'>
                                <p className={'li--num code'+item3}>03.</p>
                                <p className={'li--txt montText'+item3}>Мои работы</p>
                            </a>
                        </li>
                        <li className='Li' onMouseEnter={() => {setItem4(' green')}} onMouseLeave={() => {setItem4('')}}>
                            <a href="#Contact" className='Li-element'>
                                <p className={'li--num code'+item4}>04.</p>
                                <p className={'li--txt montText'+item4}>Контакты</p>
                            </a>
                        </li>
                    </ul>
                    <button className='montText headbtn'>Резюме</button>
                    <div onClick={changeClasses} className={classes}>
                        <div className="menu-btn__burger"></div>
                    </div>
                </nav>
            </div>

            <div className={ menu ? 'mobile--nav-wrapper sidebar--show blury' : 'mobile--nav-wrapper sidebar--hide' } 
                ref={sidebarRef}
            >
                <nav className='mobile--nav'>
                    <ul className='Ul-mob'>
                        <li className='Li-mob'>
                            <a href="#About" className='Li-element' onMouseDown={() => {changeClasses()}}>
                                <p className='code li--num'>01.</p>
                                <p className='montText li--txt'>Обо мне</p>
                            </a>
                        </li>
                        <li className='Li-mob'>
                            <a href="#Experience" className='Li-element' onMouseDown={() => {changeClasses()}}>
                                <p className='code li--num'>02.</p>
                                <p className='montText li--txt'>Опыт</p>
                            </a>
                        </li>
                        <li className='Li-mob'>
                            <a href="#Work" className='Li-element' onMouseDown={() => {changeClasses()}}>
                                <p className='code li--num'>03.</p>
                                <p className='montText li--txt'>Мои работы</p>
                            </a>
                        </li>
                        <li className='Li-mob'>
                            <a href="#Contact" className='Li-element' onMouseDown={() => {changeClasses()}}>
                                <p className='code li--num'>04.</p>
                                <p className='montText li--txt'>Контакты</p>
                            </a>
                        </li>
                    </ul>
                    <button className='btn-mob montText'>Резюме</button>
                </nav>
            </div>
        </div>
    
    )
}