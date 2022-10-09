import {ProjectInfo} from '../../types/types'
import Slider from '../Slider/Slider'
import css from './ProjectCard.module.sass'

const ProjectCard = ({data}: ProjectInfo) => {
    const {projectName, projectUrl, images} = data

    return (
        <>
            <div className={css.next}>{projectName}</div>
            <div className={css.ProjectCardWrapper}>
                <div className={css.backers}></div>
                <div className={css.ProjectCard}>
                    <Slider images={images}/>
                    <div className={css.links}>
                        <a href='*'>Подробнее</a>
                        <a target='blank' href={projectUrl}>Перейти</a>
                    </div>
                </div>
                <div className={css.backers}></div>
            </div>
        </>
    )
}

export default ProjectCard