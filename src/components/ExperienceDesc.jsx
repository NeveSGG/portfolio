import './ExperienceDesc.css'
import Fade from 'react-reveal/Fade'

export default function ExperienceDesc(props) {

    return (
        
            <div className='ExpDesc'>
                <div className='expdesc--name'>
                    <h2 className='ibmText expdesc--name-name'>{props.Name}</h2>
                    {props.MaskForLink && <h2 className='montText expdesc--name-name-2'>@</h2>}
                    {props.MaskForLink && <h2 className='montText expdesc--name-name-2'><a className='montText expdesc--name-name-2 customLink' href={props.LinkToPlace}>{props.MaskForLink}</a></h2>}
                </div>

                <div className='expdesc--date'>
                    <p className='ibmText expdesc--date-text'>{props.Date}</p>
                </div>
                
                <ul className='expdesc--list'>
                    {
                        props.Info.map((elem, i) => (
                            <li key={i} className='expdesc--list-li'>
                                <p className='ibmText expdesc--list-li-text'>{elem}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        
    )
}