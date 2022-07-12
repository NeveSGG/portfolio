import "./Work.css"
import WorkLeft from "./WorkLeft"
import WorkRight from "./WorkRight"

export default function Work() {
    return (
        <div className="Work" id='Work'>

            <div className='about--text-title'>
                <p className='code about-title-num'>03.</p>
                <h1 className='justText about-title-title'>Some Things I`ve Built</h1>
                <div className='vertical-line'></div>
            </div>

            <WorkRight />
            <WorkLeft />
            

            

        </div>
    )
}