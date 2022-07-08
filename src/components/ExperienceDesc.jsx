import './ExperienceDesc.css'

export default function ExperienceDesc(props) {

    return (
        <div className='ExpDesc'>

            <div className='expdesc--name'>
                <h2 className='justText expdesc--name-name'>{props.Name}</h2>
                {props.MaskForLink && <h2 className='justText expdesc--name-name-2'>@</h2>}
                {props.MaskForLink && <h2 className='justText expdesc--name-name-2'><a className='justText expdesc--name-name-2 customLink' href={props.LinkToPlace}>{props.MaskForLink}</a></h2>}
            </div>

            <div className='expdesc--date'>
                <p className='code expdesc--date-text'>{props.Date}</p>
            </div>
            
            <ul className='expdesc--list'>
                {
                    props.Info.map((elem, i) => (
                        <li key={i} className='expdesc--list-li'>
                            <p className='justText expdesc--list-li-text'>{elem}</p>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}