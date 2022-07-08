import { useState } from 'react'
import './ExperienceMenu.css'
import data from '../experienceInfo'

export default function ExperienceMenu () {

    const [uderlined, setUnderlined] = useState('School')
    const [classForLine, setClassForLine] = useState('liveLine')

    return (
        <div className='Experience'>

            <div className='about--text-title'>
                <p className='code about-title-num'>02.</p>
                <h1 className='justText about-title-title'>Experience</h1>
                <div className='vertical-line'></div>
            </div>

            <div className='Menu'>

                <div className='menu-wrapper'>
                    <div
                        onClick={() => {
                            setUnderlined('School')
                            setClassForLine('liveLine')
                        }}
                        className={uderlined==='School' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                    >
                        <p className={uderlined==='School' ? 'code menu-name colorGr' : 'code menu-name'}>School</p>
                    </div>

                    <div
                        
                        onClick={() => {
                            setUnderlined('University')
                            setClassForLine('liveLine transY2')
                        }}
                        className={uderlined==='University' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                    >
                        <p className={uderlined==='University' ? 'code menu-name colorGr' : 'code menu-name'}>University</p>
                    </div>

                    <div
                        
                        onClick={() => {
                            setUnderlined('Courses')
                            setClassForLine('liveLine transY3')
                        }}
                        className={uderlined==='Courses' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                    >
                        <p className={uderlined==='Courses' ? 'code menu-name colorGr' : 'code menu-name'}>Courses</p>
                    </div>

                    <div
                        onClick={() => {
                            setUnderlined('Internship')
                            setClassForLine('liveLine transY4')
                        }}
                        className={uderlined==='Internship' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                    >
                        <p className={uderlined==='Internship' ? 'code menu-name colorGr' : 'code menu-name'}>Internship</p>
                    </div>
                </div>

                <div className='linesWrapper'>
                    <div className='grayLineForBack'></div>
                    <div className={classForLine}></div>
                </div>

            </div>
            
            

        </div>

        
    )
}