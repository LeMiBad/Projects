import { $currentProject } from "../../store/projectsModel"
import { useStore } from "effector-react"
import ProjectHeader from "../ProjectHeader/ProjectHeader"
import css from './ProjectInfo.module.sass'
import Slider from "../Slider/Slider"
import { Link } from "react-router-dom"

const ProjectInfo = () => {
    const {projectName, projectUrl, images, icons, desc} = useStore($currentProject)
    window.scrollTo(0, 0)

    return (
        <>
            <ProjectHeader icons={icons}/>
            <div className={css.wrapper}>
                <h1 className={css.projectName}>{projectName}</h1>
                <div className={css.projectDesc}>{desc}</div>
                <div className={css.ProjectCard}>
                    <Slider images={images}/>
                    <div className={css.links}>
                        <Link to={'/Projects'}>Назад</Link>
                        <a target='blank' href={projectUrl}>Перейти</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo