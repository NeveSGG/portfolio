import './Hero.css'

export default function Hero () {
    return (
        <section className='Hero'>
            <div className='content'>
                <p className='hello code'>Hi, my name is</p>
                <h1 className='name justText'>Neverov Stepan.</h1>
                <h1 className='whatami justText'>I build web applications on React.</h1>
                <div className='middletextwrapper'>
                    <p className='description justText'>I`m a front-end engineer specializing in building modern and responsive web-apps. Currently, I`m focused on building accessible, human-centered product for engineers` teams at IT-laboratory.</p>
                </div>
                <button className='btn code herobtn'>Check out my works!</button>
            </div>
        </section>
    )
}