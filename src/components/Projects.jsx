import './Projects.css'
import GridItem from './GridItem'

export default function Projects() {
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className='Projects'>
            <div className="projects-title">
                <h1 className="justText projects-title--name">Other Noteworthy Projects</h1>
                <a href='https://github.com/NeveSGG?tab=repositories' className='code customLink projects-title--text'>view the archive</a>
            </div>


            <div className="grid">
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects projects noteworthy projects projects noteworthy projects projects noteworthy projects projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
                <GridItem 
                    openInNewTab={openInNewTab}
                    link={'https://github.com/NeveSGG'}
                    h1Text={'Other Noteworthy Projects'}
                    pText={'Other noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects noteworthy projects'}
                    techsArray={['React', 'API', 'Npm']}
                />
            </div>
        </div>
    )
}