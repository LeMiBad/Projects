import { Link } from 'react-router-dom'
import { pickIndex } from '../../store/projectsModel'
import {ProjectInfoProps} from '../../types/props'
import Slider from '../Slider/Slider'
import css from './ProjectCard.module.sass'

const ProjectCard = (cardInfo: ProjectInfoProps) => {
    const {projectName, projectUrl, images, id} = cardInfo

    return (
        <>
            <div className={css.ProjectCardWrapper}>
                <div className={css.ProjectCard}>
                    <div className={css.next}>{projectName}</div>
                    <Slider images={images}/>
                    <div className={css.links}>
                        <Link onClick={() => {pickIndex(id)}}  to='/project'>Подробнее</Link>
                        <a target='blank' href={projectUrl}>Перейти</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard