import './Footer.css'
import git1 from '../imgs/icons/github-gr.png'
import git2 from '../imgs/icons/github.png'
import inst1 from '../imgs/icons/instagram-gr.png'
import inst2 from '../imgs/icons/instagram.png'
import tg1 from '../imgs/icons/telegram-gr.png'
import tg2 from '../imgs/icons/telegram.png'
import vk1 from '../imgs/icons/vk-gr.png'
import vk2 from '../imgs/icons/vk.png'
import { useState } from 'react'


export default function Footer () {
    const [git, setGit] = useState(git1)
    const [inst, setinst] = useState(inst1)
    const [tg, settg] = useState(tg1)
    const [vk, setvk] = useState(vk1)
    return(
        <footer className="Footer">
            <p className="code footer-text2">Designed by Brittany C. Built by Neverov Stepan</p>
            <div className='footer--links'>
                <a href='https://github.com/NeveSGG' onMouseEnter={() => {
                    setGit(git2)
                }}
                onMouseLeave={() => {
                    setGit(git1)
                }}><img src={git} className='footer--links-img'></img></a>
                <a href='https://www.instagram.com/neverov_stpn/' onMouseEnter={() => {
                    setinst(inst2)
                }}
                onMouseLeave={() => {
                    setinst(inst1)
                }}><img src={inst} className='footer--links-img'></img></a>
                <a href='mailto:neverovsg@gmail.com' className='code footer--links-email'>neverovsg@gmail.com</a>
                <a href='https://t.me/stepan0o0' onMouseEnter={() => {
                    settg(tg2)
                }}
                onMouseLeave={() => {
                    settg(tg1)
                }}><img src={tg} className='footer--links-img'></img></a>
                <a href='https://vk.com/i777_namerok_blatnoy' onMouseEnter={() => {
                    setvk(vk2)
                }}
                onMouseLeave={() => {
                    setvk(vk1)
                }}><img src={vk} className='footer--links-img'></img></a>
            </div>
        </footer>
    )
}

