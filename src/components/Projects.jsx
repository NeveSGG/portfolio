import './Projects.css'
import GridItem from './GridItem'

export default function Projects() {
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className='Projects'>
            <div className="projects-title">
                <h1 className="ibmText projects-title--name">Другие проекты</h1>
                <a href='https://github.com/NeveSGG?tab=repositories' className='montText customLink projects-title--text'>посмотреть архив</a>
            </div>


            <div className="grid">

                
                    <GridItem 
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/airbnb'}
                        h1Text={'Клон AirBNB'}
                        pText={'Клон AirBNB с использованием быза данных в виде массива объектов и передача этих объектов в качестве пропсов'}
                        techsArray={['React', 'Data Base', 'Npm']}
                    />

                    <GridItem 
                        delay={200}
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/regfrom'}
                        h1Text={'Форма Регистрации'}
                        pText={'Простая и красивая форма регистрации (front only)'}
                        techsArray={['Registration', 'Front-end', 'React']}
                    />

                    <GridItem 
                        delay={400}
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/memegenerator'}
                        h1Text={'Генератор Мемов'}
                        pText={'Приложение "for fun". DataBase с ссылками на мемные картинки. Позволяет накладывать свой текст на эти картинки и составлять свои мемы.'}
                        techsArray={['React', 'API', 'DataBase']}
                    />

                    <GridItem 
                        delay={600}
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/DigitalBusinessCard'}
                        h1Text={'Карточка Пользователя'}
                        pText={'Карточка пользователя, которую можно внедрить в подходящий сайт'}
                        techsArray={['React']}
                    />

                    <GridItem 
                        delay={800}
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/traveljournal'}
                        h1Text={'Дневник Путешествий'}
                        pText={'Список мест для путешествий. Так же использовалась база данных в виде js файла, по данным из которой строятся видимые блоки.'}
                        techsArray={['Js', 'Яндекс.Карты', 'React']}
                    />
                
                    <GridItem 
                        delay={1000}
                        openInNewTab={openInNewTab}
                        link={'https://github.com/NeveSGG/facts-about-react'}
                        h1Text={'Статичный сайт с информацией о React'}
                        pText={'Мой один из первых статичных сайтов. Содержит список фактов о преимуществах Реакта'}
                        techsArray={['React']}
                    />
                
            </div>
        </div>
    )
}