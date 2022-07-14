import git1 from '../imgs/icons/gitIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import folder from '../imgs/icons/folder.png'
import './GridItem.css'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'

export default function GridItem(props) {
    const [col1, setCol1] = useState('grid-col')
    const [gitIcon, setGitIcon] = useState(git1)
    return (
        <Fade bottom delay={props.delay}>
        <div className='grid-col'
            
                    onMouseEnter={() => {
                        setCol1('grid-col col-up')
                    }}
                    onMouseLeave={() => {
                        setCol1('grid-col')
                    }}
                    onMouseDown={() => {
                        props.openInNewTab(props.link)
                    }}
                >
                    
                    <div className="grid--icons">
                        <img src={folder} className="grid--folder"></img>
                        <img className="grid--git" src={gitIcon} 
                            onMouseEnter={() => {
                                setGitIcon(git2)
                            }}
                            onMouseLeave={() => {
                                setGitIcon(git1)
                            }}
                            onMouseDown={()=> {
                                props.openInNewTab(props.link)
                            }}
                        ></img>
                    </div>
                    
                    <div className="grid-text">
                        <h1 className={col1.endsWith('col-up') ? 'ibmText grid-text--name green' : 'ibmText grid-text--name'}>{props.h1Text}</h1>
                        <p className='ibmText grid-text--text'>{props.pText}</p>
                    </div>

                    <div className='grid-techs'>
                        {   
                            props.techsArray.map((elem, i) => (
                                    <p key={i*10} className="montText grid--technologies-text">{elem}</p>
                            ))
                        }
                    </div>
                </div>
                </Fade>
    )
}