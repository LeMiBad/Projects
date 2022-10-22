import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import { pickIndex } from '../../store/projectsModel'
import {ProjectInfoProps} from '../../types/props'
import css from './ProjectCard.module.sass'

const ProjectCard = (cardInfo: ProjectInfoProps) => {
    const {projectName, projectUrl, images, id} = cardInfo


    return (
        <>
            <div className={css.projectCard}>
                <div className={css.name}>{projectName}</div>
                <Carousel infiniteLoop showStatus={false} showThumbs={false}>
                    {images.map((img, i) => <div key={i}><img alt='projectImg' src={img}></img></div>)}
                </Carousel>
                {/* <Slider images={images}/> */}
                <div className={css.links}>
                    <Link onClick={() => {pickIndex(id)}}  to='/Projects/project'>Подробнее</Link>
                    <a target='blank' href={projectUrl}>Перейти</a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard