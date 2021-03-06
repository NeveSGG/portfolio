import { useState } from 'react'
import './ExperienceMenu.css'
import data from '../experienceInfo'
import ExperienceDesc from './ExperienceDesc'
import Fade from 'react-reveal/Fade'

export default function ExperienceMenu () {

    const [uderlined, setUnderlined] = useState('School')
    const [classForLine, setClassForLine] = useState('liveLine')

    return (
        <Fade>
        <div className='Experience' id='Experience'>

            <div className='about--text-title'>
                <p className='code about-title-num'>02.</p>
                <h1 className='ibmText about-title-title'>Опыт</h1>
                <div className='vertical-line'></div>
            </div>

            <div className='wrapperwrwr'>
            
                <div className='Menu'>

                    <div className='menu-wrapper'>
                        <div
                            onClick={() => {
                                setUnderlined('School')
                                setClassForLine('liveLine')
                            }}
                            className={uderlined==='School' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                        >
                            <p className={uderlined==='School' ? 'montText menu-name colorGr' : 'montText menu-name'}>Школа</p>
                        </div>

                        <div
                            
                            onClick={() => {
                                setUnderlined('University')
                                setClassForLine('liveLine transY2')
                            }}
                            className={uderlined==='University' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                        >
                            <p className={uderlined==='University' ? 'montText menu-name colorGr' : 'montText menu-name'}>Университет</p>
                        </div>

                        <div
                            
                            onClick={() => {
                                setUnderlined('Courses')
                                setClassForLine('liveLine transY3')
                            }}
                            className={uderlined==='Courses' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                        >
                            <p className={uderlined==='Courses' ? 'montText menu-name colorGr' : 'montText menu-name'}>Курсы</p>
                        </div>

                        <div
                            onClick={() => {
                                setUnderlined('Internship')
                                setClassForLine('liveLine transY4')
                            }}
                            className={uderlined==='Internship' ? 'menu-name-wrapper chngbg' : 'menu-name-wrapper'}
                        >
                            <p className={uderlined==='Internship' ? 'montText menu-name colorGr' : 'montText menu-name'}>Практика</p>
                        </div>
                    </div>

                    <div className='linesWrapper'>
                        <div className='grayLineForBack'></div>
                        <div className={classForLine}></div>
                    </div>

                </div>

                <ExperienceDesc 
                    {...data[uderlined]}
                />

            </div>

        </div>
        </Fade>
    )
}