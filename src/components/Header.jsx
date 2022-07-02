import './Header.css'
import LogoSVG from '../imgs/logo.png'

export default function Header() {
    return(
        <div className='Header'>
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
                <button className='btn code'>Resume</button>
            </nav>
        </div>
    )
}