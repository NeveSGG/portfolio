import git1 from '../imgs/icons/gitIcon.png'
import git2 from '../imgs/icons/gitIcon2.png'
import folder from '../imgs/icons/folder.png'
import './GridItem.css'
import { useState } from 'react'

export default function GridItem(props) {
    const [col1, setCol1] = useState('grid-col')
    const [gitIcon, setGitIcon] = useState(git1)
    return (
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
                        <h1 className={col1.endsWith('col-up') ? 'justText grid-text--name green' : 'justText grid-text--name'}>{props.h1Text}</h1>
                        <p className='justText grid-text--text'>{props.pText}</p>
                    </div>

                    <div className='grid-techs'>
                        {   
                            props.techsArray.map((elem, i) => (
                                    <p key={i*10} className="code grid--technologies-text">{elem}</p>
                            ))
                        }
                    </div>
                </div>
    )
}