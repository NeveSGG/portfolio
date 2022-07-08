import { useState } from 'react'
import './MyMenu.css'

export default function MyMenu () {

    const [uderlined, setUnderlined] = useState('School')

    return (
        <div className='Menu'>

            <div
                className='menu-name-wrapper'
                onClick={setUnderlined('School')}
            >
                <p className={uderlined==='School' ? 'code menu-name colorGr' : 'code menu-name'}>School</p>
            </div>

            <div
                className='menu-name-wrapper'
                onClick={setUnderlined('University')}
            >
                <p className={uderlined==='University' ? 'code menu-name colorGr' : 'code menu-name'}>University</p>
            </div>

            <div
                className='menu-name-wrapper'
                onClick={setUnderlined('Courses')}
            >
                <p className={uderlined==='Courses' ? 'code menu-name colorGr' : 'code menu-name'}>Courses</p>
            </div>

            <div
                className='menu-name-wrapper'
                onClick={setUnderlined('Internship')}
            >
                <p className={uderlined==='Internship' ? 'code menu-name colorGr' : 'code menu-name'}>Internship</p>
            </div>

        </div>
    )
}